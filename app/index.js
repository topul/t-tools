const path = require('path')
const { app, BrowserWindow } = require('electron')
const { ipcMain, dialog } = require('electron/main')
const fs = require('fs-extra')
const sizeOf = require('image-size')

if (require('electron-squirrel-startup')) {
  app.quit()
}

const isDev = process.env.IS_DEV === 'true'

async function handleFileOpen(mainWindow) {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Images', extensions: ['jpeg', 'png', 'bmp', 'tiff', 'gif'] },
    ]
  })
  if (canceled) {
    return
  } else {
    const data = fs.readFileSync(filePaths[0])
    const dimensions = sizeOf(filePaths[0])
    return {
      path: filePaths[0],
      data: "data:image/jpg;base64," + data.toString('base64'),
      dimensions
    }
  }
}
async function handleFolderOpen(mainWindow) {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  })
  if (canceled) {
    return
  } else {
    return filePaths[0]
  }
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })
  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'))
  }
  ipcMain.handle('dialog:openFile', () => handleFileOpen(mainWindow))
  ipcMain.handle('dialog:opeFolder', () => handleFolderOpen(mainWindow))
}


app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
