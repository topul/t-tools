import React, { useState } from 'react'
import { Image, Form, Input, Button, Checkbox, notification } from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons'
import { Slider } from 'antd'

const ImageHandler = () => {
  const [imageInfo, setImageInfo] = useState({
    dimensions: {},
  })
  const [fileName, setFileName] = useState('')
  const [form] = Form.useForm()

  const openFileDialog = async () => {
    const result = await window.electronAPI.openFileDialog()
    console.log(result)
    if (result) {
      setImageInfo(result)
      form.setFieldsValue({
        width: result.dimensions.width,
        height: result.dimensions.height,
        quality: 100,
        greyscale: false,
        path: result.path,
      })
      let filePath = result.path.split('\\')
      console.log("🚀 ~ file: ImageHandler.jsx:26 ~ openFileDialog ~ filePath:", filePath)
      setFileName(filePath[filePath.length - 1])
    }
  }

  const openFolderDialog = async () => {
    const result = await window.electronAPI.openFolderDialog()
    console.log(result)
    form.setFieldsValue({
      path: result
    })
  }

  const onFinish = async (values) => {
    console.log('onFinish', values)
    const result = await window.electronAPI.saveImage({
      ...values,
      path: values.path + '\\' + fileName,
    })
    console.log(result)
    notification.success({
      message: '保存成功'
    })
  }

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex-1 flex items-center justify-center'>
        {imageInfo.data ? (
          <div className='w-full h-full flex'>
            <div className='flex-1 flex items-center justify-center
            '>
              <Image src={imageInfo.data} />
            </div>
            <div className='w-80 p-6 flex-none border-l border-indigo-500 border-solid border-r-0 border-t-0 border-b-0'>
              <Form
                form={form}
                name='basic'
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                autoComplete='off'
                labelAlign='left'
                onFinish={onFinish}
              >
                <Form.Item label='宽' name='width'>
                  <Input />
                </Form.Item>
                <Form.Item label='高' name='height'>
                  <Input />
                </Form.Item>
                <Form.Item label='质量' name='quality'>
                  <Slider min={0} max={100} />
                </Form.Item>
                <Form.Item label='灰度' name='greyscale' valuePropName='checked'>
                  <Checkbox></Checkbox>
                </Form.Item>
                {/* TODO: 截取 */}
                <Form.Item label='输出路径' name='path'>
                  <Input onClick={() => openFolderDialog()} />
                </Form.Item>
                <Form.Item>
                  <Button type='primary' htmlType='submit'>保存</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        ) : (
          <div className='cursor-pointer' onClick={() => openFileDialog()}>
            <PlusSquareOutlined style={{ fontSize: '128px' }} />
          </div>
        )}
      </div>
      <div className='h-8 flex-none flex items-center bg-slate-600 text-white'>
        {imageInfo.dimensions.type && (
          <div className='px-3'>类型：{imageInfo.dimensions.type}</div>
        )}
        {imageInfo.dimensions.width && imageInfo.dimensions.height ? (
          <div className='px-3'>
            尺寸：{imageInfo.dimensions.width}*{imageInfo.dimensions.height}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ImageHandler
