import * as a from '@components/FamilyShare/style/AfterRecordStyle'
import ImageCanvas from '@components/FamilyShare/ImageCanvas'
import { useMutation } from 'react-query'
import { familyTodayConvert, postToday } from '@apis/familyShare'
import { useConvertTodayStore, useShareStepStore } from '@stores/familyShare'
import { useTodayDateStore } from '@/stores/calendar'
import dayjs from 'dayjs'
import { useRef, useState } from 'react'
import ConvertRecord from '@components/FamilyShare/ConvertRecord'
import * as r from '@components/FamilyShare/style/RecordingStyle'
import { useCalendarQueries } from '@/hooks/useCalendarQueries'

const AfterRecord = () => {
  const { image, content, setImage } = useConvertTodayStore()
  const { setShareStep } = useShareStepStore()
  const { setDate } = useTodayDateStore()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { memberId } = useConvertTodayStore()

  const queryResults = useCalendarQueries()

  const reConvertMutation = useMutation(familyTodayConvert, {
    onMutate: () => setIsLoading(true),
    onSuccess: data => {
      setImage(data.image)
      setIsLoading(false)
      queryResults[0].refetch()
    },
  })

  const postTodayMutation = useMutation(postToday, {
    onSuccess: () => {
      setShareStep(0)
      setDate(dayjs().format('YYYY-MM-DD'))
    },
  })

  const handleReConvert = () => {
    reConvertMutation.mutate({ memberId: memberId, content: content })
  }

  const handlePost = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const imageDataUrl = canvas.toDataURL().split(',')[1]

      postTodayMutation.mutate({ memberId: memberId, content: content, image: imageDataUrl })
    }
  }

  return (
    <>
      {isLoading ? (
        <r.Container>
          <ConvertRecord />
        </r.Container>
      ) : (
        <>
          <a.ImgContainer>
            <ImageCanvas imageUrl={'data:image/png;base64,' + image} content={content} canvasRef={canvasRef} />
            <a.InfoText>텍스트의 위치를 바꿀 수 있어요!</a.InfoText>
          </a.ImgContainer>
          <a.ButtonContainer>
            <a.ReConvertBtn onClick={handleReConvert}>다시 생성할래요!</a.ReConvertBtn>
            <a.GoNextStepBtn onClick={handlePost}>이대로 응답할게요!</a.GoNextStepBtn>
          </a.ButtonContainer>
        </>
      )}
    </>
  )
}

export default AfterRecord
