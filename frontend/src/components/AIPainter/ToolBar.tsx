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
`

const ToolBar: React.FC<ToolBarProps> = ({ setLineWidth, setIsErasing, clearCanvas, undo, redo, setBrushColor }) => {
  const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#000080', '#800080', '#FFFFFF', '#000000']

  return (
    <Container>
      <button onClick={undo}>뒤로가기</button>
      <button onClick={redo}>앞으로가기</button>
      <button onClick={() => setIsErasing(false)}>붓</button>
      <button onClick={() => setIsErasing(true)}>지우개</button>
      <button onClick={clearCanvas}>초기화</button>
      <input type="range" min="1" max="50" defaultValue="5" onChange={e => setLineWidth(Number(e.target.value))} />
      {colors.map(color => (
        <button key={color} style={{ backgroundColor: color, width: '24px', height: '24px', margin: '2px' }} onClick={() => setBrushColor(color)} />
      ))}
    </Container>
  )
}

export default ToolBar
