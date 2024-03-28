import * as a from '@components/FamilyShare/style/AfterRecordStyle.tsx'
import ImageCanvas from '@components/FamilyShare/ImageCanvas'
import { useMutation } from 'react-query'
import { familyTodayConvert, postToday } from '@apis/familyShare'
import { useConvertTodayStore, useShareStepStore } from '@stores/familyShare'
import ConvertRecord from '@components/FamilyShare/ConvertRecord.tsx'
import { useNavigate } from 'react-router-dom'

const AfterRecord = () => {
  const { image, content, setImage } = useConvertTodayStore()
  const { setShareStep } = useShareStepStore()
  const navigate = useNavigate()

  const reConvertMutation = useMutation(familyTodayConvert, {
    onSuccess: data => {
      setImage(data)
    },
  })

  const postTodayMutation = useMutation(postToday, {
    onSuccess: () => {
      setShareStep(0)
      navigate('/display/share-family')
    },
  })

  const handleReConvert = () => {
    reConvertMutation.mutate({ memberId: 1, content: content })
    if (reConvertMutation.isLoading) {
      return <ConvertRecord />
    }
  }

  const handlePost = () => {
    postTodayMutation.mutate({ memberId: 3, content: '오늘은 친구랑 서울 숲에 다녀왔어', url: 'asdfasdfsadf' })
  }

  return (
    <>
      <a.ImgContainer>
        <ImageCanvas imageUrl={'/img/img_wallpapers1.png'} content={'오늘은 친구랑 서울 숲에 다녀왔어'} />
        <a.InfoText>텍스트의 위치를 바꿀 수 있어요!</a.InfoText>
      </a.ImgContainer>
      <a.ButtonContainer>
        <a.ReConvertBtn onClick={handleReConvert}>다시 생성할래요!</a.ReConvertBtn>
        <a.GoNextStepBtn onClick={handlePost}>이대로 답변할게요!</a.GoNextStepBtn>
      </a.ButtonContainer>
    </>
  )
}

export default AfterRecord
