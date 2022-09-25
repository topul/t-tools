import { useEffect, useState } from 'react'
import { Card, Input, Button, Select, message } from 'antd'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import './time.css'
dayjs.extend(utc)

const { Option } = Select
const timezones = new Array(25).fill(0).map((_, index) => {
  return index - 12
})
const time = () => {
  const [localTime, setLocalTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  const [utcTime, setUtcTime] = useState(dayjs.utc().format('YYYY-MM-DD HH:mm:ss'))
  const [timezone, setTimezone] = useState('8')
  const [originTime, setOriginTime] = useState('')
  const [resultTime, setResultTime] = useState('')

  const onChange = (e) => {
    console.log(e)
    setOriginTime(e.target.value)
  }

  const transfer = () => {
    if (dayjs(originTime).isValid()) {
      setResultTime(dayjs(originTime).utcOffset(timezone).format('YYYY-MM-DD HH:mm:ss'))
    } else {
      message.error('不是有效的时间')
    }
  }

  const selectChange = (value) => {
    console.log(value)
    setTimezone(value)
  }

  useEffect(() => {
    setInterval(() => {
      const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
      const utcNow = dayjs.utc().format('YYYY-MM-DD HH:mm:ss')
      setLocalTime(now)
      setUtcTime(utcNow)
    }, 1000)
  }, [])
  return (
    <div className='time'>
      <div className='time-top'>
        <Card style={{ width: 300 }}>
          <p>本地时间</p>
          <div>{localTime}</div>
        </Card>
        <Card style={{ width: 300 }}>
          <p>UTC时间</p>
          <div>{utcTime}</div>
        </Card>
      </div>
      <div className="time-content">
        时间：
        <Input placeholder='请输入要转换的时间' value={originTime} onChange={onChange} />
        时区：
        <Select defaultValue={timezone} value={timezone} style={{width: 200}} onChange={selectChange}>
          {
            timezones.map(item => <Option key={item} value={item}>GMT {item}</Option>)
          }
        </Select>
        <Button type='primary' style={{margin: '20px 0'}} onClick={transfer}>转换</Button><br />
        结果：
        <Input placeholder='转换后时间' readOnly value={resultTime} />
      </div>
    </div>
  )
}
export default time
