import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface ContainerProps {
  $paddingTop: string
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 444px;
  height: 840px;
  padding-top: ${props => props.$paddingTop};

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
  overflow: auto;
`

const Footer = styled.footer`
  width: 444px;
  height: 40px;
  background: #444;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 840px;
  display: flex;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 5px;
`

interface DisplayContainerProps {
  children: React.ReactNode
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children }) => {
  const navigate = useNavigate()
  const paddingTop = location.pathname === '/display/wallpapers' ? '0px' : '50px'

  return (
    <Container $paddingTop={paddingTop}>
      {children}
      <Footer>
        <Icon src={'/icon/icon_record.png'} onClick={() => navigate('/display/share-family')} />
        <Icon src={'/icon/icon_wallPapers.png'} onClick={() => navigate('/display/wallpapers')} />
        <Icon src={'/icon/icon_palette.png'} onClick={() => navigate('/display/AI-painter')} />
      </Footer>
    </Container>
  )
}

export default DisplayContainer
