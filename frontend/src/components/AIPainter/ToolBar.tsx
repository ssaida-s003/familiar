import React from 'react'
import styled from 'styled-components'

interface ToolBarProps {
  setLineWidth: (value: number) => void
  setIsErasing: (isErasing: boolean) => void
  clearCanvas: () => void
  undo: () => void
  redo: () => void
  setBrushColor: (color: string) => void
}

const Container = styled.div`
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 0;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 5px;
`

const ToolBarButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const ToolBar: React.FC<ToolBarProps> = ({ setLineWidth, setIsErasing, clearCanvas, undo, redo, setBrushColor }) => {
  const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#000080', '#800080', '#FFFFFF', '#000000']

  return (
    <Container>
      {colors.map(color => (
        <button key={color} style={{ backgroundColor: color, width: '24px', height: '24px', margin: '2px' }} onClick={() => setBrushColor(color)} />
      ))}

      <ToolBarButtons>
        <Icon src={'/icon/icon_undo.png'} onClick={undo} />
        <Icon src={'/icon/icon_redo.png'} onClick={redo} />
        <Icon src={'/icon/icon_pen.png'} onClick={() => setIsErasing(false)} />
        <Icon src={'/icon/icon_eraser.png'} onClick={() => setIsErasing(true)} />
        <Icon src={'/icon/icon_reset.png'} onClick={clearCanvas} />
        <input type="range" min="1" max="50" defaultValue="5" onChange={e => setLineWidth(Number(e.target.value))} />
      </ToolBarButtons>
    </Container>
  )
}

export default ToolBar
