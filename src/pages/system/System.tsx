import {Form, Progress} from 'antd'
import {useEffect, useState} from 'react'

const System = () => {
  const [platform, setPlatform] = useState('')
  const [version, setVersion] = useState('')
  const [memoryInfo, setMemoryInfo] = useState({} as any)
  const [versions, setVersions] = useState({} as any)
  const [ip, setIp] = useState('') // 本机ip
  const [hostname, setHostname] = useState('') // 本机主机名
  const [cpus, setCpus] = useState([] as any) // cpu信息

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
      <Form labelCol={{span: 4}} wrapperCol={{span: 20}} className="w-full">
        <Form.Item label="系统平台">
          <span>{platform}</span>
        </Form.Item>
        <Form.Item label="系统版本">
          <span>{version}</span>
        </Form.Item>
        <Form.Item label="本机ip">
          <span>{ip}</span>
        </Form.Item>
        <Form.Item label="本机主机名">
          <span>{hostname}</span>
        </Form.Item>
        <Form.Item label="cpu信息">
          <pre>{cpus}</pre>
        </Form.Item>
        <Form.Item label="node版本">
          <span>{versions.node}</span>
        </Form.Item>
        <Form.Item label="v8版本">
          <span>{versions.v8}</span>
        </Form.Item>
        <Form.Item label="chrome版本">
          <span>{versions.chrome}</span>
        </Form.Item>
        <Form.Item label="electron版本">
          <span>{versions.electron}</span>
        </Form.Item>
        <Form.Item label="系统内存">
          <span>{(memoryInfo.total / 1024 / 1024).toFixed(2)}GB</span>
        </Form.Item>
        <Form.Item label="系统可用内存">
          <span>{(memoryInfo.free / 1024 / 1024).toFixed(2)}GB</span>
        </Form.Item>
        <Form.Item label="系统内存使用率">
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
