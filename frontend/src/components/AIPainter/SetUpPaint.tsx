import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import DisplayContainer from '@common/DisplayContainer'
import * as s from '@components/AIPainter/style/SetUpPaintStyle'

interface CategorySetType {
  categoryName: string
  categoryNameByEnglish: string
}

const SetUpPaint = () => {
  const categorySet: CategorySetType[] = [
    {
      categoryName: '실사화',
      categoryNameByEnglish: 'realistic ',
    },
    { categoryName: '만화', categoryNameByEnglish: 'cartoon ' },
    {
      categoryName: '실사화',
      categoryNameByEnglish: 'realistic ',
    },
    { categoryName: '만화', categoryNameByEnglish: 'cartoon ' },
  ]
  const location = useLocation()
  const image = location.state?.image
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const selectCategory = (categoryNameByEnglish: string) => {
    setSelectedCategory(categoryNameByEnglish)
  }

  return (
    <DisplayContainer>
      <>
        <s.PaintContainer>{image && <s.Paint src={image} alt="Canvas Painting" />}</s.PaintContainer>
        <s.SetUpContainer>
          <s.TitleInfo>그림의 제목을 지어주세요!</s.TitleInfo>
          <s.TitleInput />
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
            <s.ReturnButton>다시 그릴게요!</s.ReturnButton>
            <s.MakeButton>이렇게 만들어 주세요!</s.MakeButton>
          </s.ButtonContainer>
        </s.SetUpContainer>
      </>
    </DisplayContainer>
  )
}

export default SetUpPaint
