import React from 'react'
import { ColorType } from '@types/components/ColorPaletteType'
import ColorPaletteCard from '@components/Home/ColorPaletteCard'
import * as d from '@components/Home/style/DoorColorPaletteStyle'

interface DoorColorPaletteProps {
  quadrantNum: number
}

const DoorColorPalette: React.FC<DoorColorPaletteProps> = ({ quadrantNum }) => {
  const colorSet: ColorType[] = [
    { colorName: 'BEIGE', colorCode: '#D1C7BE' },
    { colorName: 'SKY BLUE', colorCode: '#9DC1D1' },
    { colorName: 'PINK', colorCode: '#EDD7DA' },
    { colorName: 'YELLOW', colorCode: '#EDBD76' },
    { colorName: 'PEACH', colorCode: '#F1BBAF' },
    { colorName: 'FERN GREEN', colorCode: '#D1DFC5' },
    { colorName: 'WHITE ', colorCode: '#F0EFED' },
    { colorName: 'VANILLA', colorCode: '#F1E2C3' },
    { colorName: 'GREENERY', colorCode: '#597568' },
    { colorName: 'NAVY', colorCode: '#00264B' },
    { colorName: 'MARIN', colorCode: '#7A96BF' },
    { colorName: 'TAUPE', colorCode: '#AB9B90' },
    { colorName: 'PEBBLE', colorCode: '#CFCCC9' },
    { colorName: 'GRAY', colorCode: '#848081' },
    { colorName: 'CHARCOAL', colorCode: '#212121' },
  ]

  return (
    <d.Container quadrantnum={quadrantNum}>
      <d.Title>해당 냉장고 문의 색상을 선택해주세요!</d.Title>
      <d.CardSection>
        {colorSet.map(colorInfo => (
          <ColorPaletteCard key={colorInfo.colorCode} colorInfo={colorInfo} quadrantNum={quadrantNum} />
        ))}
      </d.CardSection>
    </d.Container>
  )
}

export default DoorColorPalette
