import {useEffect} from 'react'
import {Menu, Layout, ConfigProvider, theme, Switch} from 'antd'
import type {MenuProps} from 'antd'
import {Outlet, useNavigate} from 'react-router-dom'
import {
  FileImageOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  ToolOutlined,
} from '@ant-design/icons'
import {useAtom} from 'jotai'
import {type LanguageEnum, ThemeEnum, appConfig} from '@/store/store'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import {useTranslation} from 'react-i18next'
import './styles.css'

const {Content, Sider} = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const home = () => {
  const navigate = useNavigate()
  const [aConfig, setConfig] = useAtom(appConfig)
  const {t} = useTranslation()
  const items: MenuItem[] = [
    getItem(t('tools'), 'tools', <ToolOutlined />),
    getItem(t('imageHandler'), 'image', <FileImageOutlined />),
    getItem(t('system'), 'system', <InfoCircleOutlined />),
    getItem(t('setting'), 'setting', <SettingOutlined />),
  ]
  useEffect(() => {
    navigate('/tools')
    const mqList = window.matchMedia('(prefers-color-scheme: dark)')

    mqList.addEventListener('change', event => {
      // is dark mode
      if (event.matches) {
        setConfig({
          ...aConfig,
          theme: ThemeEnum.dark,
        })
      } else {
        // not dark mode
        setConfig({
          ...aConfig,
          theme: ThemeEnum.light,
        })
      }
    })
  }, [])

  const onMenuClick: MenuProps['onClick'] = ({key}) => {
    navigate(`/${key}`)
  }

  // setConfig的同时将设置保存到localStorage
  const setAndSaveConfig = async (config: {
    theme: ThemeEnum
    language: LanguageEnum
  }) => {
    setConfig(config)
    localStorage.setItem('appConfig', JSON.stringify(config))
  }

  const onChange = async () => {
    const isDarkMode = await window.darkMode.toggle()
    setAndSaveConfig({
      ...aConfig,
      theme: !isDarkMode ? ThemeEnum.light : ThemeEnum.dark,
    })
  }
  return (
    <ConfigProvider
      theme={{
        algorithm:
          aConfig.theme === 'light'
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
        token: {
          colorPrimary: '#00b96b',
        },
      }}
      locale={aConfig.language === 'zh' ? zhCN : enUS}
    >
      <Layout
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Sider theme="light" className="h-full flex flex-col">
          <Menu
            className="flex-1"
            theme="light"
            defaultSelectedKeys={['tools']}
            mode="inline"
            items={items}
            onClick={onMenuClick}
          />
          <div className="flex-none h-16 text-sm flex justify-center items-center border-solid border-0 border-t border-gray-200">
            <span className="mr-6">{t('darkMode')}</span>
            <Switch
              checked={aConfig.theme === 'dark'}
              onChange={() => {
                onChange()
              }}
            />
          </div>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: 0,
              minHeight: 280,
            }}
            className={`${
              aConfig.theme === 'light' ? 'text-black' : 'text-white'
            }`}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default home
