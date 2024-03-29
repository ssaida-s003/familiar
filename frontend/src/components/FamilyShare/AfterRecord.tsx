import * as a from '@components/FamilyShare/style/AfterRecordStyle'
import ImageCanvas from '@components/FamilyShare/ImageCanvas'
import { useMutation } from 'react-query'
import { familyTodayConvert, postToday } from '@apis/familyShare'
import { useConvertTodayStore, useShareStepStore } from '@stores/familyShare'
import ConvertRecord from '@components/FamilyShare/ConvertRecord'
import { useTodayDateStore } from '@stores/calender'
import dayjs from 'dayjs'

const AfterRecord = () => {
  const { image, content, setImage } = useConvertTodayStore()
  const { setShareStep } = useShareStepStore()
  const { setDate } = useTodayDateStore()

  const reConvertMutation = useMutation(familyTodayConvert, {
    onSuccess: data => {
      setImage(data.image)
    },
  })

  const postTodayMutation = useMutation(postToday, {
    onSuccess: () => {
      setShareStep(0)
      setDate(dayjs().format('YYYY-MM-DD'))
    },
  })

  const handleReConvert = () => {
    reConvertMutation.mutate({ memberId: 1, content: content })
    if (reConvertMutation.isLoading) {
      return <ConvertRecord />
    }
  }

  const handlePost = () => {
    postTodayMutation.mutate({ memberId: 3, content: content, image: image })
  }

  return (
    <>
      <a.ImgContainer>
        <ImageCanvas imageUrl={'data:image/png;base64,' + image} content={content} />
        <a.InfoText>텍스트의 위치를 바꿀 수 있어요!</a.InfoText>
      </a.ImgContainer>
      <a.ButtonContainer>
        <a.ReConvertBtn onClick={handleReConvert}>다시 생성할래요!</a.ReConvertBtn>
        <a.GoNextStepBtn onClick={handlePost}>이대로 응답할게요!</a.GoNextStepBtn>
      </a.ButtonContainer>
    </>
  )
}

export default AfterRecord
