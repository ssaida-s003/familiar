import styled from 'styled-components'

interface themeProps {
  $mainColor: string
}

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 94%;
  position: relative;
`

export const AlbumBtnContainer = styled.div<themeProps>`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 15px;
  right: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  background: ${props => `#${props.$mainColor}`};
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AlbumBtn = styled.img`
  width: 2rem;
`

export const InfoText = styled.div`
  font-size: 12px;
  position: absolute;
  bottom: 150px;
  right: 20px;
  margin-bottom: 5px;
`

export const NextStepBtn = styled.img`
  width: 45%;
  position: absolute;
  bottom: 60px;
  right: 10px;
`
