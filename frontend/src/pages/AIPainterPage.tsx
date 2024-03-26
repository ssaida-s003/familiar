import { useLocation } from 'react-router-dom'
import DisplayContainer from '@common/DisplayContainer'
import Canvas from '@components/AIPainter/Canvas'

const AiPainterPage = () => {
  const location = useLocation()
  const backgroundImage = location.state?.image

  return (
    <DisplayContainer>
      <Canvas backgroundImage={backgroundImage} />
    </DisplayContainer>
  )
}

export default AiPainterPage
