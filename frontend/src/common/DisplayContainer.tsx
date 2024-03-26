import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 444px;
  min-height: 795px;
  margin: 0;
  background: linear-gradient(
    163deg,
    rgba(147, 178, 212, 0.6) 0%,
    rgba(147, 178, 212, 0.11) 20.17%,
    rgba(147, 178, 212, 0.6) 40.67%,
    rgba(147, 178, 212, 0.39) 60.17%,
    rgba(147, 178, 212, 0.6) 81.67%,
    rgba(147, 178, 212, 0.24) 100%
  );
`

interface DisplayContainerProps {
  children: React.ReactNode
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default DisplayContainer
