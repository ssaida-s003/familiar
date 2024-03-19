import styled from 'styled-components'

interface QuadrantsProps {
  $selectedColor: string
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RefrigeratorContainer = styled.div`
  width: 329px;
  height: 674px;
  background-image: url('/icon/icon_refrigerator.png');
  background-size: contain;
  background-position: center;
  position: relative;
  margin-top: 20px;
  border: 0.1px solid black;

  @media (max-width: 340px), (max-height: 680px) {
    display: none;
  }
  cursor: pointer;
`

export const Quadrants0 = styled.div<QuadrantsProps>`
  width: 163.5px;
  height: 357.5px;
  position: absolute;
  top: -1px;
  right: -2px;
  background-color: ${props => props.$selectedColor};
  margin: 0.5%;
`

export const PanelContainer = styled.div`
  width: 163px;
  height: 357px;
  position: absolute;
  top: -1px;
  right: -2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Panel = styled.div`
  width: 136px;
  height: 242px;
  background: white;
  z-index: 1;
`

export const Quadrants1 = styled.div<QuadrantsProps>`
  width: 163.5px;
  height: 357.5px;
  position: absolute;
  top: -1px;
  left: -1.6px;
  background-color: ${props => props.$selectedColor};
  margin: 0.5%;
`

export const Quadrants2 = styled.div<QuadrantsProps>`
  width: 163.5px;
  height: 286.5px;
  position: absolute;
  bottom: 11.5px;
  left: -1.6px;
  background-color: ${props => props.$selectedColor};
  margin: 0.5%;
`

export const Quadrants3 = styled.div<QuadrantsProps>`
  width: 163px;
  height: 286px;
  position: absolute;
  bottom: 11.5px;
  right: -2px;
  background-color: ${props => props.$selectedColor};
  margin: 0.5%;
`
