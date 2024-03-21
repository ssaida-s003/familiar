import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 148px;
  height: 265px;
  margin: 0;
  background-color: gray;
`

interface DisplayContainerProps {
  children: React.ReactNode
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default DisplayContainer
