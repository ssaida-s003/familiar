import styled from 'styled-components'

interface ContainerProps {
  $isWallpaper: boolean
  $mainColor: string
}

interface themeProps {
  $mainColor: string
}

export const Container = styled.div<ContainerProps>`
  width: 90%;
  aspect-ratio: 1 / 0.9;
  border-radius: 1rem;
  border: 3px solid ${props => (props.$isWallpaper ? `#${props.$mainColor}` : 'transparent')};
  background: linear-gradient(101deg, rgba(255, 255, 255, 0.7) 1%, rgba(255, 255, 255, 0.4) 100%);
  padding: 3%;
  margin-bottom: 4%;
  position: relative;
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

export const ButtonContainer = styled.div<themeProps>`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-content: space-between;
  position: absolute;
  top: 13%;
  right: 4%;
  border-radius: 0.3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  background: ${props => `#${props.$mainColor}`};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
  padding: 1%;
`

export const Button = styled.button`
  box-sizing: border-box;
  width: 98%;
  margin: 1.5% auto;
  cursor: pointer;
  border-radius: 0.3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.7);
  background: linear-gradient(95deg, #fff 0%, rgba(255, 255, 255, 0.4) 100%);
  font-size: 0.6rem;
  padding: 2% 0;
`
