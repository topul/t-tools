import React, { useEffect } from 'react'
import { Menu, Layout } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Sider } = Layout

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [
  getItem('图片处理', 'image'),
  getItem('世界时间与时区换算', 'time'),
  getItem('ASCII表', 'ascii'),
  getItem('温度单位转换', 'temp'),
  getItem('进制转换', 'base'),
]
const home = () => {
  let navigate = useNavigate()

  useEffect(() => {
    navigate('/image')
  }, [])

  const onMenuClick = ({ item, key, keyPath, domEvent }) => {
    navigate(`/${key}`)
  }
  return (
    <Layout style={{
      width: '100%',
      height: '100%'
    }}>
      <Sider width={200}>
        <Menu
          style={{
            width: 200,
            height: '100%',
          }}
          theme='light'
          defaultSelectedKeys={['image']}
          mode='inline'
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
