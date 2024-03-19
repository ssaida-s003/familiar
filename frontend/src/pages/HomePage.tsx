import * as h from '@pages/style/HomePageStyle'
import DoorColorPalette from '@components/Home/DoorColorPalette'
import { useColorStore } from '@stores/refrigerator'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const setSelectedColorCode = useColorStore(state => state.selectedColorCode)
  const [isShowPalette, setIsShowPallet] = useState([false, false, false, false])
  useEffect(() => {
    console.log(setSelectedColorCode)
  }, [setSelectedColorCode])

  const handleClick = (doorNum: number) => () => {
    setIsShowPallet(current => current.map((_, index) => index === doorNum))
  }

  return (
    <h.Container>
      <h.RefrigeratorContainer>
        <h.Quadrants1 selectedcolor={setSelectedColorCode[1]} />
        <DoorColorPalette quadrantNum={1} />
        <h.Quadrants2 selectedcolor={setSelectedColorCode[2]} />
        <DoorColorPalette quadrantNum={2} />
        <h.Quadrants3 selectedcolor={setSelectedColorCode[3]} />
        <DoorColorPalette quadrantNum={3} />
      </h.RefrigeratorContainer>
    </h.Container>
  )
}

export default HomePage
