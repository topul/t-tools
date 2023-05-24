import {ArrowLeftOutlined} from '@ant-design/icons'
import {appConfig} from '@/store/store'
import {useAtom} from 'jotai'
import {useNavigate} from 'react-router-dom'
import {type FC} from 'react'

const AppBar: FC<{title: string}> = ({title}) => {
  const [aConfig] = useAtom(appConfig)
  const navigate = useNavigate()

  return (
    <div className="px-2 pb-4 flex">
      <ArrowLeftOutlined
        // style={{fontSize: '24px', cursor: 'pointer'}}
        className={`flex-none text-xl cursor-pointer ${
          aConfig.theme === 'light' ? 'text-black' : 'text-white'
        }`}
        onClick={() => {
          navigate(-1)
        }}
      />
      <div className="font-bold text-base flex-1 text-center">{title}</div>
    </div>
  )
}

export default AppBar
