import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as s from '@components/AIPainter/style/SetUpPaintStyle'
import { aiPaintConvert } from '@apis/aiPainter'
import { useFamilyStore } from '@stores/family'
import { useMutation } from 'react-query'
import Lottie from 'react-lottie'
import loading from '@/assets/lotties/loading.json'
import { usePaintStore } from '@stores/aiPaint'
import { AiPainterConvertReqType } from '@/types/aiPainter'
import AxiosError from '@common/AxiosError'
import { useThemeStore } from '@stores/theme'

interface CategorySetType {
  categoryName: string
  categoryNameByEnglish: string
}

const SetUpPaint = () => {
  const categorySet: CategorySetType[] = [
    {
      categoryName: '실사화',
      categoryNameByEnglish: 'realistic',
    },
    { categoryName: '만화', categoryNameByEnglish: 'cartoon' },
    {
      categoryName: '실사화2',
      categoryNameByEnglish: 'realistic2',
    },
    { categoryName: '만화2', categoryNameByEnglish: 'cartoon2' },
  ]
  const location = useLocation()
  const image = location.state?.image
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const familyId = useFamilyStore(state => state.familyId)
  const paintStore = usePaintStore()
  const { mainColor } = useThemeStore()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const selectCategory = (categoryNameByEnglish: string) => {
    setSelectedCategory(categoryNameByEnglish)
  }

  const handleRePaint = () => {
    navigate('/display/AI-painter')
  }

  const mutation = useMutation(async (data: AiPainterConvertReqType) => {
    return aiPaintConvert(familyId, data)
  })

  const handleConvert = async () => {
    if (selectedCategory && title && image) {
      paintStore.setTitle(title)
      paintStore.setOriginalImage(image)

      const aiPainterConvertReq = {
        drawing: image.split(',')[1],
        name: title,
        artStyle: selectedCategory,
      }

      mutation.mutate(aiPainterConvertReq)
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  if (mutation.isLoading) {
    return (
      <s.LottieContainer>
        <Lottie options={defaultOptions} width={`50%`} height={`auto`} />
      </s.LottieContainer>
    )
  }

  if (mutation.isError) {
    return <AxiosError />
  }

  if (mutation.isSuccess) {
    console.log(mutation.data)
    navigate('/display/AI-painter', { state: { backgroundImage: mutation.data } })
  }

  return (
    <>
      <s.PaintContainer>{image && <s.Paint src={image} alt="Canvas Painting" />}</s.PaintContainer>
      <s.SetUpContainer>
        <s.TitleInfo>그림의 제목을 지어주세요!</s.TitleInfo>
        <s.TitleInput onChange={handleTitleChange} />
        <s.CategoryInfo> 생성할 그림의 스타일을 골라주세요!</s.CategoryInfo>
        <s.CategoryContainer>
          {categorySet.map(category => (
            // eslint-disable-next-line react/jsx-key
            <s.Category key={category.categoryNameByEnglish} onClick={() => selectCategory(category.categoryNameByEnglish)} $isSelected={selectedCategory === category.categoryNameByEnglish}>
              {category.categoryName}
            </s.Category>
          ))}
        </s.CategoryContainer>
        <s.ButtonContainer>
          <s.ReturnButton onClick={handleRePaint}>다시 그릴게요!</s.ReturnButton>
          <s.MakeButton $mainColor={mainColor} onClick={handleConvert}>
            이렇게 만들어 주세요!
          </s.MakeButton>
        </s.ButtonContainer>
      </s.SetUpContainer>
    </>
  )
}

export default SetUpPaint
