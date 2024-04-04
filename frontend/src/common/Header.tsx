import * as h from '@common/style/HeaderStyle'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const goBack = () => {
    if (location.pathname.startsWith('/display/share-family')) {
      window.location.reload()
    } else if (location.pathname.startsWith('/display/AI-painter')) {
      navigate('/display/AI-painter')
    }
  }

  return (
    <>
      {!location.pathname.startsWith('/display/wallpapers') && (
        <h.Container>
          <h.GoBack src="/icon/icon_go_back.png" onClick={goBack} />
          <h.Title>{title}</h.Title>
        </h.Container>
      )}
    </>
  )
}

export default Header
