import {useEffect, useState} from 'react'
import {Form, Input} from 'antd'
import {useTranslation} from 'react-i18next'
import AppBar from '@/components/AppBar'

const Temp = () => {
  const [c, setC] = useState<string | number>(30)
  const [f, setF] = useState<string | number>()
  const {t} = useTranslation()
  useEffect(() => {
    setF(centigradeToFahrenheit(c))
  }, [])
  /**
   * 华氏度转摄氏度
   */
  const fahrenheitToCentigrade = (fahrenheit: string | number) => {
    if (Number.isNaN(fahrenheit)) {
      throw new Error('not a valid number')
    }
    return ((+fahrenheit - 32) / 1.8).toFixed(2)
  }

  /**
   * 摄氏度转华氏度
   */
  const centigradeToFahrenheit = (centigrade: string | number) => {
    if (Number.isNaN(centigrade)) {
      throw new Error('not a valid number')
    }
    return (+centigrade * 1.8 + 32).toFixed(2)
  }

  const onCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setC(e.target.value)
    setF(centigradeToFahrenheit(e.target.value))
  }

  const onFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setF(e.target.value)
    setC(fahrenheitToCentigrade(e.target.value))
  }

  return (
    <div className="p-6">
      <AppBar title={`${t('temp')} ${t('transform')}`} />
      <Form>
        <Form.Item label={t('celsius')}>
          <Input
            placeholder={t('celsius') ?? ''}
            value={c}
            onChange={onCChange}
          />
        </Form.Item>
        <Form.Item label={t('fahrenheit')}>
          <Input
            placeholder={t('fahrenheit') ?? ''}
            value={f}
            onChange={onFChange}
          />
        </Form.Item>
      </Form>
      <div className="mt-5 text-gray-500">
        {t('formula')}: {t('fahrenheit')} = {t('celsius')} * 1.8 + 32
      </div>
    </div>
  )
}
export default Temp
