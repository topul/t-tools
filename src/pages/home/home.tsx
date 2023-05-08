import {useEffect} from 'react'
import {Menu, Layout} from 'antd'
import type {MenuProps} from 'antd'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {ArrowLeftOutlined} from '@ant-design/icons'

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
  getItem('图片处理', 'image'),
  getItem('工具箱', 'tools'),
  getItem('系统', 'system'),
]

const notHasBack = ['/image', '/tools', '/system']

const home = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    navigate('/image')
    console.log('location', location)
  }, [])

  const onMenuClick: MenuProps['onClick'] = ({key}) => {
    navigate(`/${key}`)
  }
  return (
    <Layout
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Sider width={200}>
        <Menu
          style={{
            width: 200,
            height: '100%',
          }}
          theme="light"
          defaultSelectedKeys={['image']}
          mode="inline"
          items={items}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout className="bg-white">
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
  )
}

export default home
