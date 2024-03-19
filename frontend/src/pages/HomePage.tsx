import * as h from '@pages/style/HomePageStyle'
import DoorColorPalette from '@components/Home/DoorColorPalette'
import { useColorStore } from '@stores/refrigerator'
import { useState } from 'react'

const HomePage = () => {
  const setSelectedColorCode = useColorStore(state => state.selectedColorCode)
  const [isShowPalette, setIsShowPallet] = useState([false, false, false, false])

  const handleClick = (doorNum: number) => () => {
    setIsShowPallet(current => current.map((_, index) => index === doorNum))
  }

  return (
    <h.Container>
      <h.RefrigeratorContainer>
        <h.PanelContainer>
          <h.Panel onClick={handleClick(0)} />
        </h.PanelContainer>
        <h.Quadrants0 onClick={handleClick(0)} $selectedColor={setSelectedColorCode[0]} />
        {isShowPalette[0] && <DoorColorPalette quadrantNum={0} />}
        <h.Quadrants1 onClick={handleClick(1)} $selectedColor={setSelectedColorCode[1]} />
        {isShowPalette[1] && <DoorColorPalette quadrantNum={1} />}
        <h.Quadrants2 onClick={handleClick(2)} $selectedColor={setSelectedColorCode[2]} />
        {isShowPalette[2] && <DoorColorPalette quadrantNum={2} />}
        <h.Quadrants3 onClick={handleClick(3)} $selectedColor={setSelectedColorCode[3]} />
        {isShowPalette[3] && <DoorColorPalette quadrantNum={3} />}
      </h.RefrigeratorContainer>
    </h.Container>
  )
}

export default HomePage
