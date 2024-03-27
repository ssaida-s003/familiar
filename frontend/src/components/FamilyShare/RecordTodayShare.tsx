import BeforeRecord from '@components/FamilyShare/BeforeRecord'
import Recording from '@components/FamilyShare/Recording'
import AfterRecord from '@components/FamilyShare/AfterRecord'
import { useShareStepStore } from '@stores/familyShare'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 32vh;
  margin: 3% 0;
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
