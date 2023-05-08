import {useEffect} from 'react'
import {Menu, Layout} from 'antd'
import type {MenuProps} from 'antd'
import {Outlet, useNavigate} from 'react-router-dom'

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
  getItem('世界时间与时区换算', 'time'),
  getItem('ASCII表', 'ascii'),
  getItem('温度单位转换', 'temp'),
  getItem('进制转换', 'base'),
]
const home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/image')
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
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default home
