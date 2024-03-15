import React from 'react'
import { ColorType } from '@/types/Components/ColorPaletteType'

interface ColorPaletteCardProps {
  colorInfo: ColorType
}

const ColorPaletteCard: React.FC<ColorPaletteCardProps> = ({ colorInfo }) => {
  return <div>{colorInfo.colorName}</div>
}
export default ColorPaletteCard
