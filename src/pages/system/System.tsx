import {Form} from 'antd'
import {useEffect, useState} from 'react'

const System = () => {
  const [platform, setPlatform] = useState('')
  const [version, setVersion] = useState('')
  const [memoryInfo, setMemoryInfo] = useState({} as any)
  const [versions, setVersions] = useState({} as any)
  useEffect(() => {
    const platform = window.nodeAPI.process.platform()
    setPlatform(platform)
    const version = window.nodeAPI.process.getSystemVersion()
    setVersion(version)
    // 获取内存使用率，并刷新
    const _interval = setInterval(() => {
      const memoryInfo = window.nodeAPI.process.getSystemMemoryInfo()
      setMemoryInfo(memoryInfo)
    }, 1000)
    const versions = window.nodeAPI.process.versions()
    setVersions(versions)
    return () => {
      setPlatform('')
      setVersion('')
      setMemoryInfo({})
      clearInterval(_interval)
    }
  }, [])

  return (
    <div className="p-4">
      <Form>
        <Form.Item label="系统平台">
          <span>{platform}</span>
        </Form.Item>
        <Form.Item label="系统版本">
          <span>{version}</span>
        </Form.Item>
        <Form.Item label="node版本">
          <span>{versions.node}</span>
        </Form.Item>
        <Form.Item label="v8版本">
          <span>{versions.v8}</span>
        </Form.Item>
        <Form.Item label="系统内存">
          <span>{(memoryInfo.total / 1024 / 1024).toFixed(2)}GB</span>
        </Form.Item>
        <Form.Item label="系统可用内存">
          <span>{(memoryInfo.free / 1024 / 1024).toFixed(2)}GB</span>
        </Form.Item>
        <Form.Item label="系统内存使用率">
          <span>
            {(
              ((memoryInfo.total - memoryInfo.free) * 100) /
              memoryInfo.total
            ).toFixed(2)}
            %
          </span>
        </Form.Item>
      </Form>
    </div>
  )
}

export default System
