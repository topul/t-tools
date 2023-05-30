import {useState} from 'react'
import {Image, Form, Input, Button, Checkbox, notification, Slider} from 'antd'
import {PlusSquareOutlined} from '@ant-design/icons'
import {useTranslation} from 'react-i18next'

const ImageHandler = () => {
  const [imageInfo, setImageInfo] = useState<{
    dimensions: {width: number; height: number; type: string}
    data?: string
  }>()
  const [fileName, setFileName] = useState('')
  const [form] = Form.useForm()
  const {t} = useTranslation()

  const openFileDialog = async () => {
    const result = await window.electronAPI.openFileDialog()
    console.log(result)
    if (result) {
      setImageInfo(result)
      form.setFieldsValue({
        width: result.dimensions.width,
        height: result.dimensions.height,
        quality: 100,
        grayscale: false,
        path: result.path,
      })
      const filePath = result.path.split('\\')
      console.log(
        '🚀 ~ file: ImageHandler.jsx:26 ~ openFileDialog ~ filePath:',
        filePath,
      )
      setFileName(filePath[filePath.length - 1])
    }
  }

  const openFolderDialog = async () => {
    const result = await window.electronAPI.openFolderDialog()
    if (!result) return
    form.setFieldsValue({
      path: result,
    })
  }

  const onFinish = async (values: {
    width: string
    height: string
    quality: number
    grayscale: boolean
    path: string
  }) => {
    console.log('onFinish', values)
    await window.electronAPI.saveImage({
      ...values,
      path: window.nodeAPI.path.join(values.path, fileName),
    })
    notification.success({
      message: 'success',
    })
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        {imageInfo?.data ? (
          <div className="w-full h-full flex">
            <div
              className="flex-1 flex items-center justify-center
            "
            >
              <Image src={imageInfo.data} />
            </div>
            <div className="w-80 p-6 flex-none border-l border-indigo-500 border-solid border-r-0 border-t-0 border-b-0">
              <Form
                form={form}
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                autoComplete="off"
                labelAlign="left"
                onFinish={(values): void => {
                  onFinish(values)
                }}
              >
                <Form.Item label={t('width')} name="width">
                  <Input />
                </Form.Item>
                <Form.Item label={t('height')} name="height">
                  <Input />
                </Form.Item>
                <Form.Item label={t('quality')} name="quality">
                  <Slider min={0} max={100} />
                </Form.Item>
                <Form.Item
                  label={t('grayscale')}
                  name="grayscale"
                  valuePropName="checked"
                >
                  <Checkbox></Checkbox>
                </Form.Item>
                {/* TODO: 截取 */}
                <Form.Item label={t('outputPath')} name="path">
                  <Input
                    onClick={() => {
                      openFolderDialog()
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {t('save')}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => {
              openFileDialog()
            }}
          >
            <PlusSquareOutlined className="text-9xl" />
          </div>
        )}
      </div>
      <div className="h-8 flex-none flex items-center text-black">
        {imageInfo?.dimensions?.type && (
          <div className="px-3">
            {t('type')}: {imageInfo.dimensions.type}
          </div>
        )}
        {imageInfo?.dimensions.width && imageInfo?.dimensions.height ? (
          <div className="px-3">
            {t('size')}: {imageInfo?.dimensions.width}*
            {imageInfo?.dimensions.height}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ImageHandler
