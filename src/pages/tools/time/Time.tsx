import {useEffect, useState} from 'react'
import {Card, Input, Button, Select, message, Form} from 'antd'
import dayjs from 'dayjs'
import {useTranslation} from 'react-i18next'
import utc from 'dayjs/plugin/utc'
import AppBar from '@/components/AppBar'
dayjs.extend(utc)

const {Option} = Select
const timezones = new Array(25).fill(0).map((_, index) => {
  return `GMT ${index - 12 >= 0 ? '+' : ''}${index - 12}`
})
const time = () => {
  const [localTime, setLocalTime] = useState(
    dayjs().format('YYYY-MM-DD HH:mm:ss'),
  )
  const [utcTime, setUtcTime] = useState(
    dayjs.utc().format('YYYY-MM-DD HH:mm:ss'),
  )
  const [timezone, setTimezone] = useState('GMT +8')
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
        dayjs(originTime)
          .utcOffset(+timezone.replace('GMT ', ''))
          .format('YYYY-MM-DD HH:mm:ss'),
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
      <AppBar title={`${t('timezone')} ${t('transform')}`} />
      <div className="flex gap-5 justify-center">
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
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
        >
          <Form.Item label={t('time')}>
            <Input
              placeholder={t('please input time') ?? ''}
              value={originTime}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label={t('timezone')}>
            <Select
              defaultValue={timezone}
              value={timezone}
              style={{width: 200}}
              onChange={selectChange}
            >
              {timezones.map(item => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label={t('result')}>
            <Input
              placeholder={t('result') ?? ''}
              readOnly
              value={resultTime}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
            }}
          >
            <Button type="primary" onClick={transfer}>
              {t('transform')}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default time
