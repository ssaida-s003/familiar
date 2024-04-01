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

const ColorContainer = styled.div`
  padding-left: 10px;
  display: flex;
`

const ColorButton = styled.button`
  background-color: ${props => props.color};
  width: 24px;
  height: 24px;
  margin: 2px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px ${props => props.color}; // 테두리 추가로 강조
  }

  transition: box-shadow 0.3s ease; // 부드러운 효과
`

const ToolBar: React.FC<ToolBarProps> = ({ setLineWidth, setIsErasing, clearCanvas, undo, redo, setBrushColor }) => {
  const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#000080', '#800080', '#000000']

  return (
    <Container>
      <ColorContainer>
        {colors.map(color => (
          <ColorButton key={color} color={color} onClick={() => setBrushColor(color)} />
        ))}
      </ColorContainer>
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
