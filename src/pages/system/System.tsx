import {Form, Progress} from 'antd'
import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

const System = () => {
  const [platform, setPlatform] = useState('')
  const [version, setVersion] = useState('')
  const [memoryInfo, setMemoryInfo] = useState({} as any)
  const [versions, setVersions] = useState({} as any)
  const [ip, setIp] = useState('') // 本机ip
  const [hostname, setHostname] = useState('') // 本机主机名
  const [cpus, setCpus] = useState([] as any) // cpu信息
  const {t} = useTranslation()

  const getIpAddress = () => {
    const interfaces = window.nodeAPI.os.networkInterfaces()
    for (const devName in interfaces) {
      const iface = interfaces[devName]
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i]
        if (
          alias.family === 'IPv4' &&
          alias.address !== '127.0.0.1' &&
          !alias.internal
        ) {
          setIp(alias.address)
        }
      }
    }
  }

  const getCpus = () => {
    let reStr = ``
    const cpuInfo = window.nodeAPI.os.cpus()
    cpuInfo.forEach(item => {
      reStr += `${item.model as string} \n`
    })
    setCpus(reStr)
  }

  const getHostname = () => {
    const hostname = window.nodeAPI.os.hostname()
    setHostname(hostname)
  }

  useEffect(() => {
    const platform = window.nodeAPI.process.platform()
    setPlatform(platform)
    const version = window.nodeAPI.process.getSystemVersion()
    setVersion(version)
    // 获取内存使用率，并刷新
    const memoryInfo = window.nodeAPI.process.getSystemMemoryInfo()
    setMemoryInfo(memoryInfo)
    const _interval = setInterval(() => {
      const memoryInfo = window.nodeAPI.process.getSystemMemoryInfo()
      setMemoryInfo(memoryInfo)
    }, 1000)
    const versions = window.nodeAPI.process.versions()
    setVersions(versions)
    getIpAddress()
    getHostname()
    getCpus()
    return () => {
      setPlatform('')
      setVersion('')
      setMemoryInfo({})
      clearInterval(_interval)
    }
  }, [])

  return (
    <div className="h-full p-4 flex gap-5 overflow-y-auto">
      <Form labelCol={{span: 6}} wrapperCol={{span: 18}} className="w-full">
        <Form.Item label={t('systemPlatform')}>
          <span>{platform}</span>
        </Form.Item>
        <Form.Item label={t('systemVersion')}>
          <span>{version}</span>
        </Form.Item>
        <Form.Item label={t('localIp')}>
          <span>{ip}</span>
        </Form.Item>
        <Form.Item label={t('hostname')}>
          <span>{hostname}</span>
        </Form.Item>
        <Form.Item label={t('cpuInfo')}>
          <pre>{cpus}</pre>
        </Form.Item>
        <Form.Item label={'Node ' + t('version')}>
          <span>{versions.node}</span>
        </Form.Item>
        <Form.Item label={'V8 ' + t('version')}>
          <span>{versions.v8}</span>
        </Form.Item>
        <Form.Item label={'Chrome ' + t('version')}>
          <span>{versions.chrome}</span>
        </Form.Item>
        <Form.Item label={'Electron ' + t('version')}>
          <span>{versions.electron}</span>
        </Form.Item>
        <Form.Item label={t('memory')}>
          <span>{(memoryInfo.total / 1024 / 1024).toFixed(2)}GB</span>
        </Form.Item>
        <Form.Item label={t('availableMemory')}>
          <span>{(memoryInfo.free / 1024 / 1024).toFixed(2)}GB</span>
        </Form.Item>
        <Form.Item label={t('memoryUsage')}>
          <Progress
            type="circle"
            percent={
              +(
                ((memoryInfo.total - memoryInfo.free) * 100) /
                memoryInfo.total
              ).toFixed(2)
            }
            strokeColor={{'0%': '#108ee9', '100%': '#87d068'}}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default System
