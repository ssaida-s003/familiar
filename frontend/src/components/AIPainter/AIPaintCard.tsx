import React, { useState } from 'react'
import { getPaintResType } from '@/types/aiPainter'
import * as a from '@components/AIPainter/style/AIPaintCardStyle'

interface AiPaintCardProps {
  paint: getPaintResType
  onDeleted: (drawingId: number) => void
}

const AiPaintCard: React.FC<AiPaintCardProps> = ({ paint, onDeleted }) => {
  const [showButtons, setShowButtons] = useState(false)

  const handleSnowManIconClick = () => {
    setShowButtons(!showButtons)
  }

  const handleDelete = () => {
    onDeleted(paint.drawingId)
  }

  return (
    <a.Container $isWallpaper={paint.isWallpaper}>
      <a.CardHeader>
        <a.Title>{paint.name}</a.Title>
        {paint.isWallpaper && <a.PinIcon src="/icon/icon_pin.png" />}
        <a.SnowManIcon src="/icon/icon_snowman.png" onClick={handleSnowManIconClick} />
        {showButtons && (
          <a.ButtonContainer>
            <a.Button>배경화면 선택하기</a.Button>
            <a.Button onClick={handleDelete}>그림 삭제하기</a.Button>
          </a.ButtonContainer>
        )}
      </a.CardHeader>
      <a.CreatedDate>{paint.createdAt}</a.CreatedDate>
      <a.PaintContainer>
        <a.Img src="/img/img_sample_wallpapers.png"></a.Img>
        <a.ArrowIcon src="/icon/icon_arrow.png"></a.ArrowIcon>
        <a.Img src="/img/img_sample_wallpapers.png"></a.Img>
      </a.PaintContainer>
    </a.Container>
  )
}

export default AiPaintCard
