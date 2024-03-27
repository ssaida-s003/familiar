import React from 'react'
import styled from 'styled-components'
import BeforeRecord from '@components/FamilyShare/BeforeRecord'
import Recording from '@components/FamilyShare/Recording'
import AfterRecord from '@components/FamilyShare/AfterRecord'
import { useQnAStepStore } from '@stores/familyShare'
import { StepProps } from '@/types/familyShare'

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

const RecordQnA: React.FC<StepProps> = () => {
  const { qnaStep } = useQnAStepStore()

  return (
    <Container>
      {qnaStep == 0 && <BeforeRecord recordType={1} />}
      {qnaStep == 1 && <Recording recordType={1} />}
      {qnaStep == 2 && <AfterRecord />}
    </Container>
  )
}

export default RecordQnA
