import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  aspect-ratio: 1 / 0.6;
  border-radius: 1rem;
  border: 3px solid #80add9;
  background: linear-gradient(101deg, rgba(255, 255, 255, 0.7) 1%, rgba(255, 255, 255, 0.4) 100%);
  padding: 3%;
`

export const CardHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  padding: 0 2%;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin: auto 0;
  align-items: center;
`

export const PinIcon = styled.img`
  width: 5%;
  height: auto;
  margin-left: 10px;
`

export const SnowManIcon = styled.img`
  align-content: end;
  width: 5px;
  margin-left: auto;
`

export const CreatedDate = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2%;
  font-size: 0.8rem;
  margin-top: -2%;
`

export const PaintContainer = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const Img = styled.img`
  width: 45%;
  height: auto;
`

export const ArrowIcon = styled.img`
  width: 10%;
  height: auto;
  margin: auto 0;
`
