import * as h from '@pages/style/HomePageStyle'
import DoorColorPalette from '@components/Home/DoorColorPalette'

const HomePage = () => {
  return (
    <h.Container>
      <h.RefrigeratorContainer>
        <h.Quadrants1></h.Quadrants1>
        <DoorColorPalette />
      </h.RefrigeratorContainer>
    </h.Container>
  )
}

export default HomePage
