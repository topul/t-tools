interface Window {
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
      greyscale: boolean
    }) => Promise<void>
  }
}
