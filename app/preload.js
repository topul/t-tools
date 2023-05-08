const process = require('process')
const path = require('path')
const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog: () => ipcRenderer.invoke('dialog:openFile'),
  openFolderDialog: () => ipcRenderer.invoke('dialog:openFolder'),
  saveImage: data => ipcRenderer.invoke('image:save', data),
})

contextBridge.exposeInMainWorld('nodeAPI', {
  path: {
    join: (...args) => path.join(...args),
  },
  process: {
    cwd: () => process.cwd(),
    getSystemVersion: () => process.getSystemVersion(),
    getSystemMemoryInfo: () => process.getSystemMemoryInfo(),
    getCPUUsage: () => process.getCPUUsage(),
    getIOCounters: () => process.getIOCounters(),
    platform: () => process.platform,
    release: () => process.release,
    versions: () => process.versions,
    cpuUsage: () => process.cpuUsage(),
  },
})

// 右键菜单
window.addEventListener('contextmenu', e => {
  e.preventDefault()
  ipcRenderer.send('show-context-menu')
})

ipcRenderer.on('context-menu-command', (e, command) => {
  // ...
})
