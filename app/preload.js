const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    openFileDialog: () => ipcRenderer.invoke('dialog:openFile'),
    openFolderDialog: () => ipcRenderer.invoke('dialog:opeFolder'),
})
