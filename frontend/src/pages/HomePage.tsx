import * as h from '@pages/style/HomePageStyle'
import DoorColorPalette from '@components/Home/DoorColorPalette'
import { useColorStore } from '@stores/refrigerator'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { putDoorColors } from '@apis/doors'
import { useThemeStore } from '@stores/theme'

interface DataReqType {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
}

const HomePage = () => {
  const { selectedColorCode } = useColorStore()
  const setSelectedColorCode = useColorStore(state => state.selectedColorCode)
  const [isShowPalette, setIsShowPalette] = useState([false, false, false, false])
  const [isCloseUp, setIsCloseUp] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const { setMainColor } = useThemeStore()

  const handleClick = (doorNum: number) => () => {
    setIsShowPalette(current => current.map((_, index) => index === doorNum))
  }

  const mutation = useMutation(({ familyId, data }: { familyId: number; data: DataReqType }) => putDoorColors(familyId, data), {
    onSuccess: data => {
      console.log('업데이트 성공:', data)
    },
  })

  const goToNextStep = () => {
    const data = {
      topLeft: selectedColorCode[1],
      topRight: selectedColorCode[0],
      bottomLeft: selectedColorCode[2],
      bottomRight: selectedColorCode[3],
    }

    setMainColor(selectedColorCode[1])

    try {
      mutation.mutate({ familyId: 1, data })
      setIsShowPalette(current => current.map(() => false))
      setIsCloseUp(true)
      setTimeout(() => {
        setShowPanel(true)
      }, 1500)
    } catch (error) {
      console.error('업데이트 실패:', error)
    }
  }

  return (
    <h.Container>
      <h.NextBtn onClick={goToNextStep} src="/icon/icon_next.png" />
      {showPanel && <h.Panel src="/display/share-family" />}
      <h.RefrigeratorContainer $isCloseUp={isCloseUp}>
        <h.PanelContainer onClick={handleClick(0)} />
        <h.Quadrants onClick={handleClick(0)} $selectedColor={setSelectedColorCode[0]} $quadrantsNum={0} />
        {!isCloseUp && isShowPalette[0] && <DoorColorPalette quadrantNum={0} />}
        <h.Quadrants onClick={handleClick(1)} $selectedColor={setSelectedColorCode[1]} $quadrantsNum={1} />
        {!isCloseUp && isShowPalette[1] && <DoorColorPalette quadrantNum={1} />}
        <h.Quadrants onClick={handleClick(2)} $selectedColor={setSelectedColorCode[2]} $quadrantsNum={2} />
        {!isCloseUp && isShowPalette[2] && <DoorColorPalette quadrantNum={2} />}
        <h.Quadrants onClick={handleClick(3)} $selectedColor={setSelectedColorCode[3]} $quadrantsNum={3} />
        {!isCloseUp && isShowPalette[3] && <DoorColorPalette quadrantNum={3} />}
      </h.RefrigeratorContainer>
      {isCloseUp}
    </h.Container>
  )
}

export default HomePage
