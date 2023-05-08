import {useEffect, useState} from 'react'
import {Radio, Input, type RadioChangeEvent} from 'antd'

const Base = () => {
  const [fromRadix, setFromRadix] = useState<number>(10)
  const [src, setSrc] = useState<string>('100')
  const [toRadix, setToRadix] = useState<number>(16)
  const [destValue, setDestValue] = useState<string | number>()

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
      <div>
        <Radio.Group onChange={onChange} value={fromRadix}>
          <Radio value={2}>2进制</Radio>
          <Radio value={8}>8进制</Radio>
          <Radio value={10}>10进制</Radio>
          <Radio value={16}>16进制</Radio>
        </Radio.Group>
        <div>
          原始数字：
          <Input placeholder="原始数字" value={src} onChange={srcChange} />
        </div>
        <Radio.Group onChange={destChange} value={toRadix}>
          <Radio value={2}>2进制</Radio>
          <Radio value={8}>8进制</Radio>
          <Radio value={10}>10进制</Radio>
          <Radio value={16}>16进制</Radio>
        </Radio.Group>
        <div>
          结果：
          <Input placeholder="结果" value={destValue} />
        </div>
      </div>
    </div>
  )
}
export default Base
