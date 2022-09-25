import {useEffect, useState} from 'react'
import { Radio, Input } from 'antd'

const Base = () => {
  const [fromRadix, setFromRadix] = useState(10)
  const [src, setSrc] = useState(100)
  const [toRadix, setToRadix] = useState(16)
  const [destValue, setDestValue] = useState()

  const transfer = () => {
    setDestValue(parseInt(src, fromRadix).toString(toRadix))
  }
  useEffect(() => {
    transfer()
  }, [fromRadix, src, toRadix])
  const onChange = (e) => {
    console.log(e)
    setFromRadix(e.target.value)
  }
  const srcChange = (e) => {
    setSrc(e.target.value)
  }
  const destChange = (e) => {
    setToRadix(e.target.value)
  }

  return <div>
    <div>
      <Radio.Group onChange={onChange} value={fromRadix}>
        <Radio value={2}>2进制</Radio>
        <Radio value={8}>8进制</Radio>
        <Radio value={10}>10进制</Radio>
        <Radio value={16}>16进制</Radio>
      </Radio.Group>
      <div>
      原始数字：<Input placeholder="原始数字" value={src} onChange={srcChange} />
      </div>
      <Radio.Group onChange={destChange} value={toRadix}>
        <Radio value={2}>2进制</Radio>
        <Radio value={8}>8进制</Radio>
        <Radio value={10}>10进制</Radio>
        <Radio value={16}>16进制</Radio>
      </Radio.Group>
      <div>
        结果：<Input placeholder="结果" value={destValue} />
      </div>
    </div>
  </div>
}
export default Base
