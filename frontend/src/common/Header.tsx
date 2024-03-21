import * as h from '@common/style/HeaderStyle'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate()
  const goBack = () => {
    console.log('뒤로가기')
    navigate('/display')
  }

  return (
    <h.Container>
      <h.GoBack src="/icon/icon_go_back.png" onClick={goBack} />
      <h.Title>{title}</h.Title>
    </h.Container>
  )
}

export default Header
