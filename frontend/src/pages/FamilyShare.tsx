import { useState } from 'react'
import styled from 'styled-components'
import Header from '@common/Header'
import DisplayContainer from '@common/DisplayContainer'
import ShareOrQuestion from '@components/FamilyShare/ShareOrQuestion'
import Calender from '@components/FamilyShare/Calender'
import AIImgAnswer from '@components/FamilyShare/AIImgAnswer'
import RecordTodayShare from '@components/FamilyShare/RecordTodayShare'
import RecordQnA from '@components/FamilyShare/RecordQnA'
import { useShareStepStore } from '@stores/familyShare.ts'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
`

const FamilyShare = () => {
  const [isTodayShareRecord, setIsTodayShareRecord] = useState(false)
  const [isQnARecord, setIsQnARecord] = useState(false)
  const { shareStep } = useShareStepStore()

  return (
    <DisplayContainer>
      <>
        <Header title={'가족 공유'} />
        <Container>
          {shareStep === 0 && <ShareOrQuestion setIsTodayShareRecord={setIsTodayShareRecord} setIsQnARecord={setIsQnARecord} />}
          {shareStep !== 0 && isTodayShareRecord ? <RecordTodayShare /> : isQnARecord && <RecordQnA />}
          <AIImgAnswer />
          <Calender />
        </Container>
      </>
    </DisplayContainer>
  )
}

export default FamilyShare
