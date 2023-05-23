import {Switch, Form} from 'antd'
import {useAtom} from 'jotai'
import {ThemeEnum, appTheme} from '@/store/store'

const Setting = () => {
  const [theme, setTheme] = useAtom(appTheme)
  return (
    <div className="p-4">
      <Form labelCol={{span: 4}} wrapperCol={{span: 20}}>
        <Form.Item label="主题">
          <Switch
            checkedChildren="暗黑"
            unCheckedChildren="亮色"
            checked={theme === 'dark'}
            onChange={() => {
              setTheme(theme === 'dark' ? ThemeEnum.light : ThemeEnum.dark)
            }}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Setting
