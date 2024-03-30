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
