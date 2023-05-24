import {useEffect, useState} from 'react'
import {Menu, Layout, ConfigProvider, theme} from 'antd'
import type {MenuProps} from 'antd'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {
  FileImageOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  ToolOutlined,
} from '@ant-design/icons'
import {useAtom} from 'jotai'
import {appConfig} from '@/store/store'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import {useTranslation} from 'react-i18next'

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
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [aConfig] = useAtom(appConfig)
  const {t} = useTranslation()
  const items: MenuItem[] = [
    getItem(t('tools'), 'tools', <ToolOutlined />),
    getItem(t('imageHandler'), 'image', <FileImageOutlined />),
    getItem(t('system'), 'system', <InfoCircleOutlined />),
    getItem(t('setting'), 'setting', <SettingOutlined />),
  ]
  useEffect(() => {
    navigate('/tools')
    console.log('location', location)
  }, [])

  const onMenuClick: MenuProps['onClick'] = ({key}) => {
    navigate(`/${key}`)
  }
  return (
    <ConfigProvider
      theme={{
        algorithm:
          aConfig.theme === 'light'
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
      }}
      locale={aConfig.language === 'zh' ? zhCN : enUS}
    >
      <Layout
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => {
            setCollapsed(value)
          }}
          theme="light"
        >
          <Menu
            style={{
              height: '100%',
            }}
            theme="light"
            defaultSelectedKeys={['tools']}
            mode="inline"
            items={items}
            onClick={onMenuClick}
          />
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
