import {useEffect, useState} from 'react'
import {Card, Input, Button, Select, message} from 'antd'
import dayjs from 'dayjs'
import {useTranslation} from 'react-i18next'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const {Option} = Select
const timezones = new Array(25).fill(0).map((_, index) => {
  return index - 12
})
const time = () => {
  const [localTime, setLocalTime] = useState(
    dayjs().format('YYYY-MM-DD HH:mm:ss'),
  )
  const [utcTime, setUtcTime] = useState(
    dayjs.utc().format('YYYY-MM-DD HH:mm:ss'),
  )
  const [timezone, setTimezone] = useState('8')
  const [originTime, setOriginTime] = useState('')
  const [resultTime, setResultTime] = useState('')
  const {t} = useTranslation()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setOriginTime(e.target.value)
  }

  const transfer = () => {
    if (dayjs(originTime).isValid()) {
      setResultTime(
        dayjs(originTime).utcOffset(timezone).format('YYYY-MM-DD HH:mm:ss'),
      )
    } else {
      message.error('invalid time')
    }
  }

  const selectChange = (value: string) => {
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
    <div className="p-6">
      <div className="flex gap-5">
        <Card style={{width: 300}}>
          <p>{t('localTime')}</p>
          <div>{localTime}</div>
        </Card>
        <Card style={{width: 300}}>
          <p>{t('UTCTime')}</p>
          <div>{utcTime}</div>
        </Card>
      </div>
      <div className="mt-5">
        {t('time')}:
        <Input
          placeholder={t('please input time') ?? ''}
          value={originTime}
          onChange={onChange}
        />
        {t('timezone')}:
        <Select
          defaultValue={timezone}
          value={timezone}
          style={{width: 200}}
          onChange={selectChange}
        >
          {timezones.map(item => (
            <Option key={item} value={item}>
              GMT {item}
            </Option>
          ))}
        </Select>
        <Button type="primary" style={{margin: '20px 0'}} onClick={transfer}>
          {t('transfer')}
        </Button>
        <br />
        {t('result')}:
        <Input placeholder={t('result') ?? ''} readOnly value={resultTime} />
      </div>
    </div>
  )
}
export default time
