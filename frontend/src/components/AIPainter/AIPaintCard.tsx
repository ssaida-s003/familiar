import React from 'react'
import { getPaintResType } from '@/types/aiPainter'
import * as a from '@components/AIPainter/style/AIPaintCardStyle'

interface AiPaintCardProps {
  paint: getPaintResType
}

const AiPaintCard: React.FC<AiPaintCardProps> = ({ paint }) => {
  return (
    <a.Container $isWallpaper={paint.isWallpaper}>
      <a.CardHeader>
        <a.Title>{paint.name}</a.Title>
        <a.PinIcon src="/icon/icon_pin.png" />
        <a.SnowManIcon src="/icon/icon_snowman.png" />
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
