import DisplayContainer from '@common/DisplayContainer'
import Header from '@common/Header'
import AIPaintList from '@components/AIPainter/AIPaintList'

const AIPaintAlbumPage = () => {
  return (
    <DisplayContainer>
      <>
        <Header title={'AI 그림판'} />
        <AIPaintList />
      </>
    </DisplayContainer>
  )
}

export default AIPaintAlbumPage
