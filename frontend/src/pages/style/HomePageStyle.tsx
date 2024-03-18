import styled from 'styled-components'

interface QuadrantsProps {
  selectedcolor: string
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
`
export const Quadrants1 = styled.div<QuadrantsProps>`
  width: 49.5%;
  height: 52.8%;
  position: absolute;
  left: -0.5px;
  background-color: ${props => props.selectedcolor};
  margin: 0.5%;
`

export const Quadrants2 = styled.div<QuadrantsProps>`
  width: 49.4%;
  height: 42.25%;
  position: absolute;
  bottom: 11.5px;
  left: -0.5px;
  background-color: ${props => props.selectedcolor};
  margin: 0.5%;
`

export const Quadrants3 = styled.div<QuadrantsProps>`
  width: 49.4%;
  height: 42.25%;
  position: absolute;
  bottom: 11.5px;
  right: -2px;
  background-color: ${props => props.selectedcolor};
  margin: 0.5%;
`
