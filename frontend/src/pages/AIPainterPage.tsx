import { useLocation } from 'react-router-dom'
import DisplayContainer from '@common/DisplayContainer'
import Canvas from '@components/AIPainter/Canvas'
import Header from '@common/Header'

const AiPainterPage = () => {
  const location = useLocation()
  const backgroundImage = location.state?.image

  return (
    <DisplayContainer>
      <Header title={'AI 그림 그리기'} />
      <Canvas backgroundImage={backgroundImage} />
    </DisplayContainer>
  )
}

export default AiPainterPage
