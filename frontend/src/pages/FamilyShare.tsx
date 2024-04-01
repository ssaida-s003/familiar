import { useEffect, useState } from 'react'
import DisplayContainer from '@common/DisplayContainer'
import ShareOrQuestion from '@components/FamilyShare/ShareOrQuestion'
import Calender from '@components/FamilyShare/Calender'
import AIImgAnswer from '@components/FamilyShare/AIImgAnswer'
import RecordTodayShare from '@components/FamilyShare/RecordTodayShare'
import RecordQnA from '@components/FamilyShare/RecordQnA'
import { useShareStepStore } from '@stores/familyShare'
import { useMutation } from 'react-query'
import { fetchDoorColors } from '@apis/doors'
import { useThemeStore } from '@stores/theme'

const FamilyShare = () => {
  const [isTodayShareRecord, setIsTodayShareRecord] = useState(false)
  const [isQnARecord, setIsQnARecord] = useState(false)
  const { shareStep } = useShareStepStore()
  const { setMainColor } = useThemeStore()

  const mutation = useMutation(({ familyId }: { familyId: number }) => fetchDoorColors(familyId), {
    onSuccess: data => {
      console.log(data)
      setMainColor(data)
    },
  })

  useEffect(() => {
    mutation.mutate({ familyId: 1 })
  }, [])

  return (
    <DisplayContainer title={'가족 공유'}>
      {shareStep === 0 && <ShareOrQuestion setIsTodayShareRecord={setIsTodayShareRecord} setIsQnARecord={setIsQnARecord} />}
      {shareStep !== 0 && isTodayShareRecord ? <RecordTodayShare /> : isQnARecord && <RecordQnA />}
      <AIImgAnswer />
      <Calender />
    </DisplayContainer>
  )
}

export default FamilyShare
