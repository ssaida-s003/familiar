import styled from 'styled-components'

interface QuadrantsProps {
  $selectedColor: string
  $quadrantsNum: number
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

export const RefrigeratorContainer = styled.div`
  width: 329px;
  height: 674px;
  background-image: url('/icon/icon_refrigerator.png');
  background-size: contain;
  background-position: center;
  position: relative;
  margin-top: 20px;
  border: 0.1px solid black;
  cursor: pointer;

  @media (max-width: 340px), (max-height: 680px) {
    display: none;
  }
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

export const Panel = styled.div`
  width: 148px;
  height: 264px;
  background: white;
  z-index: 1;
`
