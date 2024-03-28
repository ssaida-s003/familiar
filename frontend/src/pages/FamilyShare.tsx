import { useState } from 'react'
import styled from 'styled-components'
import Header from '@common/Header'
import DisplayContainer from '@common/DisplayContainer'
import ShareOrQuestion from '@components/FamilyShare/ShareOrQuestion'
import Calender from '@components/FamilyShare/Calender'
import AIImgAnswer from '@components/FamilyShare/AIImgAnswer'
import RecordTodayShare from '@components/FamilyShare/RecordTodayShare'
import RecordQnA from '@components/FamilyShare/RecordQnA'
import { useTodayDateStore } from '@stores/calender'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
`

const FamilyShare = () => {
  const [isTodayShareRecord, setIsTodayShareRecord] = useState(false)
  const [isQnARecord, setIsQnARecord] = useState(false)
  const { date } = useTodayDateStore()

  return (
    <DisplayContainer>
      <>
        <Header title={'가족 공유'} />
        <Container>
          {isTodayShareRecord ? <RecordTodayShare /> : isQnARecord ? <RecordQnA /> : <ShareOrQuestion setIsTodayShareRecord={setIsTodayShareRecord} setIsQnARecord={setIsQnARecord} />}
          <AIImgAnswer />
          <div>{date}</div>
          <Calender />
        </Container>
      </>
    </DisplayContainer>
  )
}

export default FamilyShare
