import DisplayContainer from '@common/DisplayContainer'
import SetUpPaint from '@components/AIPainter/SetUpPaint'
import Header from '@common/Header'

const SetUpPaintPage = () => {
  return (
    <DisplayContainer>
      <Header title={'AI 그림 생성'} />
      <SetUpPaint />
    </DisplayContainer>
  )
}

export default SetUpPaintPage
