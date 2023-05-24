interface Window {
  darkMode: {
    toggle: () => Promise<boolean>
    system: () => Promise<void>
  }
  electronAPI: {
    openFileDialog: () => Promise<{
      dimensions: {
        width: number
        height: number
        type: string
      }
      path: string
    }>
    openFolderDialog: () => Promise<string>
    saveImage: (data: {
      path: string
      width: string
      height: string
      quality: number
      grayscale: boolean
    }) => Promise<void>
  }
  nodeAPI: {
    path: PlatformPath
    process: electronProcess
    os: {
      networkInterfaces: NetworkInterfaceBase
      hostname: () => string
      cpus: () => CPUInfo[]
    }
  }
}
