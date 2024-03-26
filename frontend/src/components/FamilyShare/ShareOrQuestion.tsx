import { useEffect, useState } from 'react'
import * as s from '@components/FamilyShare/style/ShareOrQuestionStyle'

const ShareOrQuestion = () => {
  const [shareOrQuestion, setShareOrQuestion] = useState(0)
  useEffect(() => {
    setShareOrQuestion(0);
  }, []);

  //   api 통신 결과
  // 0 두개 1 하루공유 2 질문과답변
  return (
    <s.Container>
      {shareOrQuestion === 0 && (
        <s.ShareOrQuestionContainer>
          <s.ShareContainerSmall></s.ShareContainerSmall>
          <s.QuestionContainerSmall></s.QuestionContainerSmall>
        </s.ShareOrQuestionContainer>
      )}
      {shareOrQuestion !== 0 && <s.SelectedContainer $shareOrQuestion={shareOrQuestion} />}
    </s.Container>
  )
}

export default ShareOrQuestion
