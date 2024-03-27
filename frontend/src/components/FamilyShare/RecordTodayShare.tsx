import BeforeRecord from '@components/FamilyShare/BeforeRecord'
import Recording from '@components/FamilyShare/Recording'
import AfterRecord from '@components/FamilyShare/AfterRecord'
import { useShareStepStore } from '@stores/familyShare'
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  margin: 3% auto;
  height: 32vh;
  background: linear-gradient(144deg, #fff -13.94%, rgba(255, 255, 255, 0) 112.31%);
  border-radius: 1rem;
  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(0.5rem);
  border: 0.05rem solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const RecordTodayShare = () => {
  const { step } = useShareStepStore()
  return (
    <Container>
      {step == 0 && <BeforeRecord />}
      {step == 1 && <Recording />}
      {step == 2 && <AfterRecord />}
    </Container>
  )
}

export default RecordTodayShare
