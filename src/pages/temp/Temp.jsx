import { useEffect, useState } from 'react'
import { Input } from 'antd'
import './temp.css'

const Temp = () => {
  const [c, setC] = useState(30)
  const [f, setF] = useState()
  useEffect(() => {
    setF(centigradeToFahrenheit(c))
  }, [])
  /**
   * 华氏度转摄氏度
   */
  const fahrenheitToCentigrade = (fahrenheit) => {
    if (Number.isNaN(fahrenheit)) {
      throw new Error('not a valid number')
    }
    return ((fahrenheit - 32) / 1.8).toFixed(2)
  }

  /**
   * 摄氏度转华氏度
   */
  const centigradeToFahrenheit = (centigrade) => {
    if (Number.isNaN(centigrade)) {
      throw new Error('not a valid number')
    }
    return (centigrade * 1.8 + 32).toFixed(2)
  }

  const onCChange = (e) => {
    setC(e.target.value)
    setF(centigradeToFahrenheit(e.target.value))
  }

  const onFChange = (e) => {
    setF(e.target.value)
    setC(fahrenheitToCentigrade(e.target.value))
  }

  return (
    <div className='p-6'>
      <div>
        <div>
          摄氏度（℃）：
          <Input
            placeholder='请输入摄氏度'
            value={c}
            onChange={onCChange}
          />
        </div>
        <div>
          华氏度（℉）：
          <Input
            placeholder='请输入摄氏度'
            value={f}
            onChange={onFChange}
          />
        </div>
        <div className='comment'>
          计算公式：华氏度 = 摄氏度 * 1.8 + 32
        </div>
      </div>
    </div>
  )
}
export default Temp
