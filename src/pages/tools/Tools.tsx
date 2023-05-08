import {useNavigate} from 'react-router-dom'
import {Card} from 'antd'

const Tools = () => {
  const navigate = useNavigate()

  const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
    cursor: 'pointer',
  }
  return (
    <>
      <Card>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigate('/tools/time')
          }}
        >
          世界时间与时区换算
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigate('/tools/ascii')
          }}
        >
          ASCII表
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigate('/tools/temp')
          }}
        >
          温度单位转换
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigate('/tools/base')
          }}
        >
          进制转换
        </Card.Grid>
      </Card>
    </>
  )
}

export default Tools
