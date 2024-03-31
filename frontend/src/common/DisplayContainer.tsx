import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Header from '@common/Header.tsx'
import { useThemeStore } from '@stores/theme'

interface ContainerProps {
  $mainColor: string
  $paddingTop: string
}

const hexToRgba = (hex: string, opacity: number) => {
  let r = 0,
    g = 0,
    b = 0
  if (hex.length === 6) {
    r = parseInt(hex[0] + hex[1], 16)
    g = parseInt(hex[2] + hex[3], 16)
    b = parseInt(hex[4] + hex[5], 16)
  }
  return `rgba(${r},${g},${b},${opacity})`
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 444px;
  height: 820px;
  padding-bottom: 50px;
  background: linear-gradient(
      163deg,
      ${props => hexToRgba(props.$mainColor, 0.3)} 0%,
      ${props => hexToRgba(props.$mainColor, 0.7)} 20.17%,
      ${props => hexToRgba(props.$mainColor, 0.6)} 40.67%,
      ${props => hexToRgba(props.$mainColor, 0.4)} 60.17%,
      ${props => hexToRgba(props.$mainColor, 0.7)} 81.67%,
      ${props => hexToRgba(props.$mainColor, 0.4)} 100%
    ),
    white;
  overflow: auto;
`

const Footer = styled.footer`
  width: 444px;
  height: 40px;
  background: #aeaeae;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  display: flex;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 5px;
`

interface DisplayContainerProps {
  children: React.ReactNode
  title: string
}

const DisplayContainer: React.FC<DisplayContainerProps> = ({ children, title }) => {
  const navigate = useNavigate()
  const paddingTop = location.pathname === '/display/wallpapers' ? '0px' : '50px'
  const { mainColor } = useThemeStore()

  return (
    <Container $mainColor={mainColor} $paddingTop={paddingTop}>
      <Header title={title} />
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
