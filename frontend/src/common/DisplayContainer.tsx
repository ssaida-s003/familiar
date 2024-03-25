import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 444px;
  height: 795px;
  margin: 0;
  background-color: #80add9;
`

interface DisplayContainerProps {
  children: React.ReactNode
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default DisplayContainer
