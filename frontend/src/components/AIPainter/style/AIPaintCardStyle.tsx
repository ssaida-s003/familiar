import styled from 'styled-components'

interface ContainerProps {
  $isWallpaper: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 90%;
  aspect-ratio: 1 / 0.9;
  border-radius: 1rem;
  border: 3px solid ${props => (props.$isWallpaper ? '#80add9' : 'transparent')};
  background: linear-gradient(101deg, rgba(255, 255, 255, 0.7) 1%, rgba(255, 255, 255, 0.4) 100%);
  padding: 3%;
  margin-bottom: 4%;
`

export const CardHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 13%;
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
  width: 4%;
  height: auto;
  margin-left: 10px;
`

export const SnowManIcon = styled.img`
  align-content: end;
  width: 1%;
  margin-left: auto;
`

export const CreatedDate = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2%;
  font-size: 0.8rem;
  margin-top: -1.5%;
`

export const PaintContainer = styled.div`
  width: 100%;
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const Img = styled.img`
  width: 43%;
  height: auto;
`

export const ArrowIcon = styled.img`
  width: 10%;
  height: auto;
  margin: auto 0;
`
