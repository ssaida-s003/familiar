import React from 'react'
import { getPaintResType } from '@/types/aiPainter'

interface AiPaintCardProps {
  paint: getPaintResType
}

const AiPaintCard: React.FC<AiPaintCardProps> = ({ paint }) => {
  return <div>{paint.name}</div>
}

export default AiPaintCard
