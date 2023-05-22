const path = require('path')
const {app, BrowserWindow, Menu} = require('electron')
const {ipcMain, dialog} = require('electron/main')
const fs = require('fs-extra')
const sizeOf = require('image-size')
const Jimp = require('jimp')

if (require('electron-squirrel-startup')) {
  app.quit()
}

const isDev = process.env.IS_DEV === 'true'
let imageFilePath = ''

async function handleFileOpen(mainWindow) {
  const {canceled, filePaths} = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      {name: 'Images', extensions: ['jpeg', 'png', 'bmp', 'tiff', 'gif']},
    ],
  })
  if (canceled) {
    return false
  } else {
    const data = fs.readFileSync(filePaths[0])
    const dimensions = sizeOf(filePaths[0])
    imageFilePath = filePaths[0]
    return {
      path: filePaths[0],
      data: 'data:image/jpg;base64,' + data.toString('base64'),
      dimensions,
    }
  }
}
async function handleFolderOpen(mainWindow) {
  const {canceled, filePaths} = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  })
  if (canceled) {
    return false
  } else {
    return filePaths[0]
  }
}

async function handleImageSave(data) {
  console.log(data)
  try {
    const image = await Jimp.read(imageFilePath)
    const newImage = image
      .resize(+data.width, +data.height)
      .quality(data.quality)
    let greyscaleImage = newImage
    if (data.greyscale) {
      greyscaleImage = newImage.greyscale()
    }
    greyscaleImage.write(data.path)
    return true
  } catch (error) {
    console.log(error)
    throw error
  }
}

// 菜单
ipcMain.on('show-context-menu', event => {
  const template = [
    {label: '刷新', click: () => event.sender.reload()},
    {label: '开发者工具', click: () => event.sender.openDevTools()},
  ]
  const menu = Menu.buildFromTemplate(template)
  menu.popup(BrowserWindow.fromWebContents(event.sender))
})

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  })
  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'))
  }
  ipcMain.handle('dialog:openFile', () => handleFileOpen(mainWindow))
  ipcMain.handle('dialog:openFolder', () => handleFolderOpen(mainWindow))
  ipcMain.handle('image:save', (event, data) => handleImageSave(data))
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      Menu.setApplicationMenu(null)
      createWindow()
    }
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
