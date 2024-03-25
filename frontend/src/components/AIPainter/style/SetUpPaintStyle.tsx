import styled from 'styled-components'

export const PaintContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Paint = styled.img`
  width: 60%;
  background-color: white;
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));
`

export const SetUpContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40%;
  background: linear-gradient(113deg, rgba(255, 255, 255, 0.56) 1.61%, rgba(255, 255, 255, 0.32) 100%);
  padding: 5%;
`

export const TitleInfo = styled.div`
  font-weight: 700;
  margin: 2% 0;
  font-size: 18px;
`

export const TitleInput = styled.input`
  width: 96%;
  border-radius: 2px;
  border: 1px solid #fff;
  padding: 2%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: transparent;
  margin: 2% 0;
`

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 2% 0;
  justify-content: space-around;
`

export const CategoryInfo = styled.div`
  font-weight: 700;
  margin: 2% 0;
  font-size: 18px;
`

export const Category = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 5% 0;
`

export const ReturnButton = styled.button`
  width: 48%;
  padding: 2%;
  border-radius: 50px;
  border: 4px solid #d9d9d9;
  background: linear-gradient(92deg, #d9d9d9 0.01%, rgba(255, 255, 255, 0.4) 109.3%);
  font-weight: 700;
`

export const MakeButton = styled.button`
  width: 48%;
  padding: 2%;
  border-radius: 50px;
  border: 4px solid rgba(128, 173, 217, 0.7);
  background: linear-gradient(92deg, rgba(128, 173, 217, 0.7) 0.01%, rgba(255, 255, 255, 0.4) 109.3%);
  font-weight: 700;
`
