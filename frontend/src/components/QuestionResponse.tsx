import * as q from '@components/FamilyShare/style/QustionResponseStyle'
import { useQnAResponse } from '@stores/calender.ts'

const QuestionResponse = () => {
  const { qnAResponse } = useQnAResponse()

  return (
    <q.Container>
      <q.QuestionerImg src={'/icon/icon_daughter.png'} />
      <q.QuestionText>
        <q.Q>Q.</q.Q>
        {qnAResponse.content}
      </q.QuestionText>
    </q.Container>
  )
}

export default QuestionResponse
