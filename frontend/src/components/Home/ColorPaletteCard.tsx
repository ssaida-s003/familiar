import React from 'react'
import { ColorType } from '@/types/components/ColorPaletteType'
import * as c from '@components/Home/style/ColorPaletteCardStyle'
import { useColorStore } from '@stores/refrigerator'

interface ColorPaletteCardProps {
  colorInfo: ColorType
  quadrantNum: number
}

const ColorPaletteCard: React.FC<ColorPaletteCardProps> = ({ colorInfo, quadrantNum }) => {
  const selectedColorCode = useColorStore(state => state.selectedColorCode)
  const setSelectedColorCode = useColorStore(state => state.updateSelectedColorCode)

  const handleClick = () => {
    setSelectedColorCode(quadrantNum, colorInfo.colorCode)
    console.log(selectedColorCode)
  }

  return (
    <c.Container onClick={handleClick} $cardColor={colorInfo.colorCode}>
      <c.ColorDiv $cardColor={colorInfo.colorCode} />
      <c.ColorText>{colorInfo.colorName}</c.ColorText>
    </c.Container>
  )
}
export default ColorPaletteCard
