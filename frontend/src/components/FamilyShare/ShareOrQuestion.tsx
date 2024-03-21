import { useState } from 'react'
import * as s from '@components/FamilyShare/style/ShareOrQuestionStyle'

const ShareOrQuestion = () => {
  const [shareOrQuestion, setShareOrQuestion] = useState(1)

  //   api 통신 결과

  return (
    <s.Container>
      {shareOrQuestion === 0 && (
        <s.ShareOrQuestionContainer>
          <s.ShareContainerSmall></s.ShareContainerSmall>
          <s.QuestionContainerSmall></s.QuestionContainerSmall>
        </s.ShareOrQuestionContainer>
      )}
      {shareOrQuestion === 1 && <s.QuestionContainer />}
      {shareOrQuestion === 2 && <s.ShareContainer />}
    </s.Container>
  )
}

export default ShareOrQuestion
