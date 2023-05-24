import {useEffect, useState} from 'react'
import {Radio, Input, type RadioChangeEvent, Form} from 'antd'
import {useTranslation} from 'react-i18next'
import AppBar from '@/components/AppBar'

const Base = () => {
  const [fromRadix, setFromRadix] = useState<number>(10)
  const [src, setSrc] = useState<string>('100')
  const [toRadix, setToRadix] = useState<number>(16)
  const [destValue, setDestValue] = useState<string | number>()
  const {t} = useTranslation()

  const baseTransfer = (src: string, from: number, to: number) => {
    return parseInt(src, from).toString(to)
  }

  const transfer = () => {
    setDestValue(baseTransfer(src, fromRadix, toRadix))
  }
  useEffect(() => {
    transfer()
  }, [fromRadix, src, toRadix])
  const onChange = (e: RadioChangeEvent) => {
    console.log(e)
    setFromRadix(e.target.value)
  }
  const srcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSrc(e.target.value)
  }
  const destChange = (e: RadioChangeEvent) => {
    setToRadix(e.target.value)
  }

  return (
    <div className="p-6">
      <AppBar title={`${t('base')} ${t('transform')}`} />
      <Form labelCol={{span: 2}} wrapperCol={{span: 14}} labelAlign="left">
        <Form.Item>
          <Radio.Group onChange={onChange} value={fromRadix}>
            <Radio value={2}>{t('binary')}</Radio>
            <Radio value={8}>{t('octal')}</Radio>
            <Radio value={10}>{t('decimal')}</Radio>
            <Radio value={16}>{t('hexadecimal')}</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={t('originalNumber')}>
          <Input placeholder="原始数字" value={src} onChange={srcChange} />
        </Form.Item>
        <Form.Item>
          <Radio.Group onChange={destChange} value={toRadix}>
            <Radio value={2}>{t('binary')}</Radio>
            <Radio value={8}>{t('octal')}</Radio>
            <Radio value={10}>{t('decimal')}</Radio>
            <Radio value={16}>{t('hexadecimal')}</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={t('result')}>
          <Input placeholder="结果" value={destValue} />
        </Form.Item>
      </Form>
    </div>
  )
}
export default Base
