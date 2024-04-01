import { useState } from 'react'
import DisplayContainer from '@common/DisplayContainer'
import styled from 'styled-components'
import { useBackgroundStore } from '@stores/background'
import { useThemeStore } from '@stores/theme'

interface themeProps {
  $mainColor: string
}

const NextBtn = styled.img<themeProps>`
  position: absolute;
  bottom: 50px;
  right: 15px;
  width: 40px;
  cursor: pointer;
  background: ${props => `#${props.$mainColor}`};
  border-radius: 10rem;
`

const WallPapersPage = () => {
  const { paintBackground } = useBackgroundStore()
  const { mainColor } = useThemeStore()
  const [currentIndex, setCurrentIndex] = useState(0)

  // 배경화면을 넘기는 함수
  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % paintBackground.length)
  }

  return (
    <DisplayContainer title={'배경화면'}>
      {paintBackground.length > 0 && <img key={currentIndex} src={paintBackground[currentIndex]} alt="배경화면" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      <NextBtn $mainColor={mainColor} src="/icon/icon_next.png" onClick={handleNextClick}></NextBtn>
    </DisplayContainer>
  )
}

export default WallPapersPage
