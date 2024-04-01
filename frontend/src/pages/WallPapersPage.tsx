import { useState } from 'react'
import DisplayContainer from '@common/DisplayContainer'
import styled from 'styled-components'
import { useBackgroundStore } from '@stores/background'
import { useThemeStore } from '@stores/theme'
import { useTodayDateStore } from '@stores/calendar'
import { useQueries } from 'react-query'
import { fetchFamilyShareRecord, fetchQnARecord } from '@apis/calendar'

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

const ChangeBtn = styled.img`
  position: absolute;
  bottom: 50px;
  left: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`

const WallPapersPage = () => {
  const { paintBackground } = useBackgroundStore()
  const { mainColor } = useThemeStore()
  const [currentIndex, setCurrentIndex] = useState(1)
  const [backgroundType, setBackgroundType] = useState(0)
  const [currentIndex2, setCurrentIndex2] = useState(0)
  const { date } = useTodayDateStore()

  // 배경화면을 넘기는 함수
  const handleNextClick = () => {
    if (backgroundType === 1) {
      setCurrentIndex(prevIndex => (prevIndex + 1) % paintBackground.length)
    } else if (backgroundType === 2 && shareRecord) {
      setCurrentIndex2(prevIndex => (prevIndex + 1) % shareRecord.length)
    }
  }

  const queryResults = useQueries([
    {
      queryKey: ['familyShareRecord', 1, date],
      queryFn: () => fetchFamilyShareRecord(1, { date }),
      enabled: !!date,
    },
    {
      queryKey: ['qnaRecord', 1, date],
      queryFn: () => fetchQnARecord(1, { date }),
      enabled: !!date,
    },
  ])

  const shareRecord = queryResults[0].data

  const handleChangeClick = () => {
    if (backgroundType === 1) {
      setBackgroundType(2)
    } else {
      setBackgroundType(1)
    }
  }

  return (
    <DisplayContainer title={'배경화면'}>
      <ChangeBtn onClick={handleChangeClick}></ChangeBtn>
      {backgroundType === 1 && paintBackground.length > 0 && (
        <img key={currentIndex} src={paintBackground[currentIndex]} alt="배경화면" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )}
      {backgroundType === 2 && shareRecord && (
        <img
          key={currentIndex2}
          src={shareRecord[currentIndex2].url}
          alt="배경화면"
          style={{
            width: '100%',
            height: 'auto',
            margin: '35% 0 0 0',
            objectFit: 'cover',
          }}
        />
      )}
      <NextBtn $mainColor={mainColor} src="/icon/icon_next.png" onClick={handleNextClick}></NextBtn>
    </DisplayContainer>
  )
}

export default WallPapersPage
