import styled from 'styled-components'

interface QuadrantsProps {
  $selectedColor: string
  $quadrantsNum: number
}

interface RefrigeratorContainerProps {
  $isCloseUp: boolean
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NextBtn = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  cursor: pointer;
`

export const RefrigeratorContainer = styled.div<RefrigeratorContainerProps>`
  width: 329px;
  height: 674px;
  background-image: url('/icon/icon_refrigerator.png');
  background-size: contain;
  background-position: center;
  margin-top: 20px;
  border: 0.1px solid black;
  cursor: pointer;

  @media (max-width: 340px), (max-height: 680px) {
    display: none;
  }

  transition: transform 1.5s ease-in-out;
  transform: ${props => props.$isCloseUp && 'scale(3) translate(-25%, 23.5%)'};
  position: relative;
`

export const Quadrants = styled.div<QuadrantsProps>`
  width: 163.5px;
  height: ${props => (props.$quadrantsNum === 0 || props.$quadrantsNum === 1 ? '357.5px' : '286.5px')};
  position: absolute;
  top: ${props => (props.$quadrantsNum === 0 || props.$quadrantsNum === 1 ? '-1px' : 'auto')};
  bottom: ${props => (props.$quadrantsNum === 2 || props.$quadrantsNum === 3 ? '11.5px' : 'auto')};
  right: ${props => (props.$quadrantsNum === 0 || props.$quadrantsNum === 3 ? '-2px' : 'auto')};
  left: ${props => (props.$quadrantsNum === 1 || props.$quadrantsNum === 2 ? '-1.6px' : 'auto')};
  background-color: ${props => props.$selectedColor};
  margin: 0.5%;
`

export const PanelContainer = styled.div`
  width: 163.5px;
  height: 357.5px;
  position: absolute;
  top: -1px;
  right: -2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5%;
`

export const Panel = styled.iframe`
  width: 444px;
  height: 820px;
  background: white;
  z-index: 1;
  border: none;
  position: absolute;
`

export const SmallRefrigerator = styled.div`
  position: absolute;
  bottom: 25px;
  right: 25px;
  background-image: url('/icon/icon_refrigerator.png');
  background-size: contain;
  background-position: center;
  width: 180px;
  height: 370px;
`
