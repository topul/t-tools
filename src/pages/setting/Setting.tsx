import {Switch, Form, Select} from 'antd'
import {useAtom} from 'jotai'
import {ThemeEnum, appTheme, appLanguage, LanguageEnum} from '@/store/store'
import {useTranslation} from 'react-i18next'

const Setting = () => {
  const [theme, setTheme] = useAtom(appTheme)
  const [locale, setLocale] = useAtom(appLanguage)
  const {t, i18n} = useTranslation()
  return (
    <div className="p-4">
      <Form labelCol={{span: 4}} wrapperCol={{span: 20}}>
        <Form.Item label={t('theme')}>
          <Switch
            checkedChildren={t('dark')}
            unCheckedChildren={t('light')}
            checked={theme === 'dark'}
            onChange={() => {
              setTheme(theme === 'dark' ? ThemeEnum.light : ThemeEnum.dark)
            }}
          />
        </Form.Item>
        <Form.Item label={t('language')}>
          <Select
            value={locale}
            onSelect={() => {
              setLocale(locale === 'zh' ? LanguageEnum.en : LanguageEnum.zh)
              i18n.changeLanguage(locale === 'zh' ? 'en' : 'zh')
            }}
            style={{width: 120}}
          >
            <Select.Option value="zh">中文</Select.Option>
            <Select.Option value="en">English</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Setting
