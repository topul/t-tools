import {useNavigate} from 'react-router-dom'
import {Card} from 'antd'
import {useTranslation} from 'react-i18next'

const Tools = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()

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
          {t('timezone')} {t('transform')}
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigate('/tools/ascii')
          }}
        >
          {t('ASCII')}
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigate('/tools/temp')
          }}
        >
          {t('temp')} {t('transform')}
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigate('/tools/base')
          }}
        >
          {t('base')} {t('transform')}
        </Card.Grid>
      </Card>
    </>
  )
}

export default Tools
