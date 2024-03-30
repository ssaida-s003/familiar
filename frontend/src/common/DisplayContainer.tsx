import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  box-sizing: border-box;
  width: 444px;
  min-height: 795px;
  padding-top: 50px;
  background: linear-gradient(
      163deg,
      rgba(65, 142, 176, 0.3) 0%,
      rgba(65, 142, 176, 0.7) 20.17%,
      rgba(65, 142, 176, 0.6) 40.67%,
      rgba(65, 142, 176, 0.4) 60.17%,
      rgba(65, 142, 176, 0.7) 81.67%,
      rgba(65, 142, 176, 0.4) 100%
    ),
    white;
  overflow: scroll;
`

interface DisplayContainerProps {
  children: React.ReactNode
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children }) => {
  return <Container>{children} </Container>
  const navigate = useNavigate()
  const paddingTop = location.pathname === '/display/wallpapers' ? '0px' : '50px'
}

export default DisplayContainer
