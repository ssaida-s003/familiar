import React, { useState } from 'react'
import { getPaintResType } from '@/types/aiPainter'
import * as a from '@components/AIPainter/style/AIPaintCardStyle'
import { selectWallPaper } from '@apis/aiPainter'
import { useMutation } from 'react-query'
import { useThemeStore } from '@stores/theme'
import { useBackgroundStore } from '@stores/background'

interface AiPaintCardProps {
  paint: getPaintResType
  onDeleted: (drawingId: number) => void
}

const AiPaintCard: React.FC<AiPaintCardProps> = ({ paint, onDeleted }) => {
  const [showButtons, setShowButtons] = useState(false)
  const { mainColor } = useThemeStore()
  const { appendPaintBackground } = useBackgroundStore()

  const handleSnowManIconClick = () => {
    setShowButtons(!showButtons)
  }

  const selectMutation = useMutation(() => selectWallPaper(paint.familyId, paint.drawingId, !paint.isWallpaper), {})

  const handleSelect = () => {
    selectMutation.mutate()
    paint.isWallpaper = !paint.isWallpaper
    appendPaintBackground(paint.generatedImage)
  }

  const handleDelete = () => {
    onDeleted(paint.drawingId)
  }

  return (
    <a.Container $isWallpaper={paint.isWallpaper} $mainColor={mainColor}>
      <a.CardHeader>
        <a.Title>{paint.name}</a.Title>
        {paint.isWallpaper && <a.PinIcon src="/icon/icon_pin.png" />}
        <a.SnowManIcon src="/icon/icon_snowman.png" onClick={handleSnowManIconClick} />
        {showButtons && (
          <a.ButtonContainer $mainColor={mainColor}>
            <a.Button onClick={handleSelect}>{paint.isWallpaper ? '배경화면 해제하기' : '배경화면 선택하기'}</a.Button>
            <a.Button onClick={handleDelete}>그림 삭제하기</a.Button>
          </a.ButtonContainer>
        )}
      </a.CardHeader>
      <a.CreatedDate>{paint.createdAt.split('T')[0]}</a.CreatedDate>
      <a.PaintContainer>
        <a.Img src={`${paint.originalImage}`}></a.Img>
        <a.ArrowIcon src="/icon/icon_arrow.png"></a.ArrowIcon>
        <a.Img src={`${paint.generatedImage}`}></a.Img>
      </a.PaintContainer>
    </a.Container>
  )
}

export default AiPaintCard
