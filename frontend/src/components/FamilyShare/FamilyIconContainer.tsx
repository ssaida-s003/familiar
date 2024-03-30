import styled from 'styled-components'

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

  return (
    <Container>
      {family.map((each, index) => (
        <FamilyIcon src={`/icon/icon_${each}.png`} key={index} />
      ))}
    </Container>
  )
}

export default FamilyIconContainer
