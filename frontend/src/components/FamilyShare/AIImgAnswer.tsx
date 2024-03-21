import NoAnswerAlarm from '@components/FamilyShare/NoAnswerAlarm.tsx'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 5% 0;
  justify-content: center;
  align-items: center;
`

const AiImgAnswer = () => {
  return (
    <Container>
      <NoAnswerAlarm />
    </Container>
  )
}

export default AiImgAnswer
