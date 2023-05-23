import {useEffect, useState} from 'react'
import {Menu, Layout, ConfigProvider, theme} from 'antd'
import type {MenuProps} from 'antd'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {
  ArrowLeftOutlined,
  FileImageOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  ToolOutlined,
} from '@ant-design/icons'
import {useAtom} from 'jotai'
import {appTheme} from '@/store/store'

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
const items: MenuItem[] = [
  getItem('图片处理', 'image', <FileImageOutlined />),
  getItem('工具箱', 'tools', <ToolOutlined />),
  getItem('系统', 'system', <InfoCircleOutlined />),
  getItem('设置', 'setting', <SettingOutlined />),
]

const notHasBack = ['/image', '/tools', '/system', '/setting']

const home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [aTheme] = useAtom(appTheme)

  useEffect(() => {
    navigate('/image')
    console.log('location', location)
  }, [])

  const onMenuClick: MenuProps['onClick'] = ({key}) => {
    navigate(`/${key}`)
  }
  return (
    <ConfigProvider
      theme={{
        algorithm:
          aTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
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
            defaultSelectedKeys={['image']}
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
          >
            {!notHasBack.includes(location.pathname) && (
              <div className="pl-2">
                <ArrowLeftOutlined
                  style={{fontSize: '24px', cursor: 'pointer'}}
                  onClick={() => {
                    navigate(-1)
                  }}
                />
              </div>
            )}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default home
