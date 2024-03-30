import styled from 'styled-components'
import { useConvertTodayStore } from '@stores/familyShare.ts'

const Container = styled.div`
  display: flex;
`

const FamilyIcon = styled.img`
  width: 1.8rem;
  padding: 2px;
  margin: 2px;
  border-radius: 1rem;
  background: skyblue;
`

const FamilyIconContainer = () => {
  const family = ['mother', 'father', 'son', 'daughter']
  const { setMemberId } = useConvertTodayStore()

  const handleIconClick = (index: number) => {
    setMemberId(index)
  }

  return (
    <Container>
      {family.map((each, index) => (
        <FamilyIcon src={`/icon/icon_${each}.png`} onClick={() => handleIconClick(index)} key={index} />
      ))}
    </Container>
  )
}

export default FamilyIconContainer
