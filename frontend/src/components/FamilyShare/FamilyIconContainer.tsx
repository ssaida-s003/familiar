import styled from 'styled-components'
import { useConvertTodayStore } from '@stores/familyShare'
import { useThemeStore } from '@stores/theme'

interface themeProps {
  $mainColor: string
}

const Container = styled.div`
  display: flex;
`

const FamilyIcon = styled.img<themeProps>`
  width: 1.8rem;
  padding: 2px;
  margin: 2px;
  border-radius: 1rem;
  background: ${props => `#${props.$mainColor}`};
`

const FamilyIconContainer = () => {
  const family = ['mother', 'father', 'daughter', 'son']
  const { setMemberId } = useConvertTodayStore()
  const { mainColor } = useThemeStore()

  const handleIconClick = (index: number) => {
    setMemberId(index + 1)
  }

  return (
    <Container>
      {family.map((each, index) => (
        <FamilyIcon $mainColor={mainColor} src={`/icon/icon_${each}.png`} onClick={() => handleIconClick(index)} key={index} />
      ))}
    </Container>
  )
}

export default FamilyIconContainer
