import React, { useEffect, useState } from 'react'
import { Image } from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons'
import './image.css'

const ImageHandler = () => {
  const [imageUrl, setImageUrl] = useState('')

  const openFileDialog = async () => {
    console.log('openFileDialog', window.electronAPI)
    const result = await window.electronAPI.openFileDialog()
    console.log(result)
    setImageUrl(result)
  }

  return (
    <div className='w-full h-full'>
      {imageUrl ? (
        <Image src={imageUrl} />
      ) : (
        <div className='w-full h-full flex items-center justify-center cursor-pointer' onClick={() => openFileDialog()}>
          <PlusSquareOutlined style={{ fontSize: '128px' }} />
        </div>
      )}
    </div>
  )
}

export default ImageHandler
