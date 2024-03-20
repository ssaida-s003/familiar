import * as h from '@pages/style/HomePageStyle'
import DoorColorPalette from '@components/Home/DoorColorPalette'
import { useColorStore } from '@stores/refrigerator'
import { useState } from 'react'

const HomePage = () => {
  const setSelectedColorCode = useColorStore(state => state.selectedColorCode)
  const [isShowPalette, setIsShowPallet] = useState([false, false, false, false])
  const [isCloseUp, setIsCloseUp] = useState(false)

  const handleClick = (doorNum: number) => () => {
    setIsShowPallet(current => current.map((_, index) => index === doorNum))
  }

  const goToNextStep = () => {
    setIsShowPallet(current => current.map(() => false))
    setIsCloseUp(true)
  }

  return (
    <h.Container>
      <h.NextBtn onClick={goToNextStep} src="/icon/icon_next.png" />
      <h.RefrigeratorContainer $isCloseUp={isCloseUp}>
        <h.PanelContainer onClick={handleClick(0)}>
          <h.Panel src="" />
        </h.PanelContainer>
        <h.Quadrants onClick={handleClick(0)} $selectedColor={setSelectedColorCode[0]} $quadrantsNum={0} />
        {!isCloseUp && isShowPalette[0] && <DoorColorPalette quadrantNum={0} />}
        <h.Quadrants onClick={handleClick(1)} $selectedColor={setSelectedColorCode[1]} $quadrantsNum={1} />
        {!isCloseUp && isShowPalette[1] && <DoorColorPalette quadrantNum={1} />}
        <h.Quadrants onClick={handleClick(2)} $selectedColor={setSelectedColorCode[2]} $quadrantsNum={2} />
        {!isCloseUp && isShowPalette[2] && <DoorColorPalette quadrantNum={2} />}
        <h.Quadrants onClick={handleClick(3)} $selectedColor={setSelectedColorCode[3]} $quadrantsNum={3} />
        {!isCloseUp && isShowPalette[3] && <DoorColorPalette quadrantNum={3} />}
      </h.RefrigeratorContainer>
      {isCloseUp && <h.SmallRefrigerator />}
    </h.Container>
  )
}

export default HomePage
