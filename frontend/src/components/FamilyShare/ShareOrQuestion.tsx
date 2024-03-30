import React, { useState } from 'react'
import * as s from '@components/FamilyShare/style/ShareOrQuestionStyle'
import { useQnAStepStore, useShareStepStore } from '@stores/familyShare.ts'
import FamilyIconContainer from '@components/FamilyShare/FamilyIconContainer'

interface ShareOrQuestionProps {
  setIsTodayShareRecord: (isRecord: boolean) => void
  setIsQnARecord: (isRecord: boolean) => void
}

const ShareOrQuestion: React.FC<ShareOrQuestionProps> = ({ setIsTodayShareRecord, setIsQnARecord }) => {
  const [shareOrQuestion] = useState(0)
  const { shareStep, setShareStep } = useShareStepStore()
  const { qnaStep, setQnAStep } = useQnAStepStore()

  //   api 통신 결과
  // 0 두개 1 하루공유 2 질문과답변

  const handleRecordToday = () => {
    setIsTodayShareRecord(true)
    setShareStep(shareStep + 1)
  }

  const handleRecordQnA = () => {
    setIsQnARecord(true)
    setQnAStep(qnaStep + 1)
  }

  return (
    <s.Container>
      {shareOrQuestion === 0 && (
        <s.ShareOrQuestionContainer>
          <s.ShareContainerSmall>
            <s.TopContainer>
              <s.Title>하루 기록</s.Title>
              <FamilyIconContainer />
            </s.TopContainer>
            <s.BottomContainer>
              <s.SubTitle>오늘 하루를 간단하게 기록해보세요!</s.SubTitle>
              <s.GoNexStepBtn onClick={handleRecordToday}>하루 기록 남기기</s.GoNexStepBtn>
            </s.BottomContainer>
          </s.ShareContainerSmall>
          <s.QuestionContainerSmall>
            <s.TopContainer>
              <s.Title>오늘의 질문</s.Title>
            </s.TopContainer>
            <s.BottomContainer>
              <s.SubTitle>
                궁금한 것을 <br />
                질문해보세요!
              </s.SubTitle>
              <s.GoNexStepBtn onClick={handleRecordQnA}>음성 질문 남기기</s.GoNexStepBtn>
            </s.BottomContainer>
          </s.QuestionContainerSmall>
        </s.ShareOrQuestionContainer>
      )}
      {shareOrQuestion !== 0 && <s.SelectedContainer $shareOrQuestion={shareOrQuestion} />}
    </s.Container>
  )
}

export default ShareOrQuestion
