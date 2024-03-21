import DisplayContainer from '@common/DisplayContainer'
import Header from '@common/Header'
import ShareOrQuestion from '@components/FamilyShare/ShareOrQuestion'
import Calender from '@components/FamilyShare/Calender'
import Navbar from '@common/Navbar'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FamilyShare = () => {
  return (
    <DisplayContainer>
      <Container>
        <Header />
        <ShareOrQuestion />
        <Calender />
        <Navbar />
      </Container>
    </DisplayContainer>
  )
}

export default FamilyShare
