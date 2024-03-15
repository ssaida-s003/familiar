import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RefrigeratorContainer = styled.div`
  width: 330px;
  height: 674px;
  background-image: url('/icon/icon_refrigerator.png');
  background-size: contain;
  background-position: center;
  position: relative;
  margin-top: 20px;

  @media (max-width: 340px), (max-height: 680px) {
    display: none;
  }
`
export const Quadrants1 = styled.div`
  width: 49.5%;
  height: 52.8%;
  position: absolute;
  background-color:;
  margin: 0.4%;
`
