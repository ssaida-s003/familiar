import { ColorCardType } from '@types/Components/ColorPaletteType'

const DoorColorPalette = () => {
  const colorSet: ColorCardType[] = [
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
    <>
      <div>해당 냉장고 문의 색상을 선택해주세요!</div>
    </>
  )
}

export default DoorColorPalette
