import styled from 'styled-components'

export const ImgContainer = styled.div`
  width: 100%;
  height: 150%;
  display: flex;
  flex-direction: column;
  padding: 5%;
  align-items: center;
`

export const InfoText = styled.div`
  width: 45%;
  text-align: end;
  font-size: 0.5rem;
`

export const ButtonContainer = styled.div`
  width: 90%;
  margin: 0 auto 3% auto;
  display: flex;
  justify-content: space-between;
`

export const ReConvertBtn = styled.div`
  width: 38%;
  border-radius: 0.5rem;
  border: 0.1rem solid #9b9b9b;
  color: #797979;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  text-align: center;
  cursor: pointer;

  :focus {
    border: none;
    outline: none;
  }
`

export const GoNextStepBtn = styled.div`
  width: 38%;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  text-align: center;
  cursor: pointer;
`
