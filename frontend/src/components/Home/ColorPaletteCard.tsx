import React from 'react'
import * as c from '@components/Home/style/ColorPaletteCardStyle'
import { useColorStore } from '@stores/refrigerator'

interface ColorType {
  colorName: string
  colorCode: string
}

interface ColorPaletteCardProps {
  colorInfo: ColorType
  quadrantNum: number
}

const ColorPaletteCard: React.FC<ColorPaletteCardProps> = ({ colorInfo, quadrantNum }) => {
  const setSelectedColorCode = useColorStore(state => state.updateSelectedColorCode)

  const handleClick = () => {
    setSelectedColorCode(quadrantNum, colorInfo.colorCode)
  }

  return (
    <c.Container onClick={handleClick} $cardColor={colorInfo.colorCode}>
      <c.ColorDiv $cardColor={colorInfo.colorCode} />
      <c.ColorText>{colorInfo.colorName}</c.ColorText>
    </c.Container>
  )
}
export default ColorPaletteCard
