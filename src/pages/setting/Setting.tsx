import {Switch, Form, Select} from 'antd'
import {useAtom} from 'jotai'
import {ThemeEnum, appConfig, LanguageEnum} from '@/store/store'
import {useTranslation} from 'react-i18next'

const Setting = () => {
  const [config, setConfig] = useAtom(appConfig)
  const {t, i18n} = useTranslation()

  // setConfig的同时将设置保存到localStorage
  const setAndSaveConfig = (
    config:
      | {theme: ThemeEnum; language: LanguageEnum}
      | ((prev: {theme: ThemeEnum; language: LanguageEnum}) => {
          theme: ThemeEnum
          language: LanguageEnum
        }),
  ) => {
    setConfig(config)
    localStorage.setItem('appConfig', JSON.stringify(config))
  }

  return (
    <div className="p-4">
      <Form labelCol={{span: 4}} wrapperCol={{span: 20}}>
        <Form.Item label={t('theme')}>
          <Switch
            checkedChildren={t('dark')}
            unCheckedChildren={t('light')}
            checked={config.theme === 'dark'}
            onChange={() => {
              setAndSaveConfig({
                ...config,
                theme:
                  config.theme === 'dark' ? ThemeEnum.light : ThemeEnum.dark,
              })
            }}
          />
        </Form.Item>
        <Form.Item label={t('language')}>
          <Select
            value={config.language}
            onSelect={() => {
              setAndSaveConfig({
                ...config,
                language:
                  config.language === 'zh' ? LanguageEnum.en : LanguageEnum.zh,
              })
              i18n.changeLanguage(config.language === 'zh' ? 'en' : 'zh')
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
