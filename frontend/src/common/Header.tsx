import * as h from '@common/style/HeaderStyle'
import React from 'react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h.Container>
      <h.GoBack src="/icon/icon_go_back.png" />
      <h.Title>{title}</h.Title>
    </h.Container>
  )
}

export default Header
