import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as s from '@components/AIPainter/style/SetUpPaintStyle'
import { aiPaintConvert } from '@apis/aiPainter'
import { useFamilyStore } from '@stores/family.ts'
import { useMutation } from 'react-query'
import Lottie from 'react-lottie'
import loading from '@/assets/lotties/loading.json'

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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const selectCategory = (categoryNameByEnglish: string) => {
    setSelectedCategory(categoryNameByEnglish)
  }

  const handleRePaint = () => {
    navigate('/display/AI-painter')
  }

  const dataURItoBlob = (dataURI: string): Blob => {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURIComponent(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
    const ia = new Uint8Array(byteString.length)

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }

    return new Blob([ia], { type: mimeString })
  }

  const mutation = useMutation(async (formData: FormData) => {
    return aiPaintConvert(familyId, formData)
  })

  const handleConvert = async () => {
    if (selectedCategory && title && image) {
      const imageBlob = dataURItoBlob(image)
      const formData = new FormData()
      formData.append('image', imageBlob)
      formData.append('name', title)
      formData.append('artStyle', selectedCategory)
      mutation.mutate(formData)
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
    return (
      <s.ErrorContainer>
        예기치 못한 에러가 발생하였습니다.
        <s.ReturnButton onClick={() => window.location.reload()}>뒤로가기</s.ReturnButton>
      </s.ErrorContainer>
    )
  }

  if (mutation.isSuccess) {
    console.log(mutation.data)
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
          <s.MakeButton onClick={handleConvert}>이렇게 만들어 주세요!</s.MakeButton>
        </s.ButtonContainer>
      </s.SetUpContainer>
    </>
  )
}

export default SetUpPaint
