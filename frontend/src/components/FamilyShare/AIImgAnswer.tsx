import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NoAnswerAlarm from '@components/FamilyShare/NoAnswerAlarm'
import { useQnAResponse, useResponseCategory, useTodayDateStore, useTodayShareResponse } from '@stores/calender'
import CustomCarousel from '@components/FamilyShare/CustomCarousel'
import QuestionResponse from '@components/QuestionResponse'

type Slide = {
  key: string | number
  content: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  margin: 2% 0;
  justify-content: center;
  align-items: center;
`

const AiImgAnswer = () => {
  const { categoryId } = useResponseCategory()
  const [slides, setSlides] = useState<Slide[]>([])
  const { todayShareResponse } = useTodayShareResponse()
  const { qnAResponse } = useQnAResponse()
  const { date } = useTodayDateStore()

  useEffect(() => {
    let newSlides: Slide[] = []
    console.log(todayShareResponse)
    if (categoryId === 0 && todayShareResponse) {
      newSlides = todayShareResponse.map((item, index) => ({
        key: index,
        content: <img src={item.url} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />,
      }))
    } else if (categoryId === 1 && qnAResponse) {
      newSlides = qnAResponse.answers.map((item, index) => ({
        key: index,
        content: <img src={item.url} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />,
      }))
    }
    setSlides(newSlides)
  }, [categoryId, todayShareResponse, qnAResponse])

  return (
    <Container>
      <Date>{date.split('-').join('.')}</Date>
      {categoryId === 1 && <QuestionResponse />}
      {slides.length > 0 ? <CustomCarousel cards={slides} height="300px" width="40%" margin="0 auto" offset={2} showArrows={false} /> : <NoAnswerAlarm />}
    </Container>
  )
}

export default AiImgAnswer
