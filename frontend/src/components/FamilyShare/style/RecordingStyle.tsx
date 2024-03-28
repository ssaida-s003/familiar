import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 32vh;
`

export const TopContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
`

export const BottomContainer = styled.div`
  width: 100%;
  height: 55%;
  border-radius: 0 0 1rem 1rem;
  background: linear-gradient(99deg, rgba(255, 255, 255, 0.5) 8.1%, rgba(255, 255, 255, 0.2) 95.9%);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: end;
`

export const TextAreaInput = styled.textarea`
  width: 80%;
  margin: 0 auto;
  height: 70%;
  font-size: 20px;
  border: none;
  background: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  padding: 0 1rem;
  box-sizing: border-box;
  align-content: center;
  text-align: center;
`

export const ButtonContainer = styled.div`
  width: 90%;
  margin: 0 auto 2.5% auto;
  display: flex;
  justify-content: space-between;
  height: 30%;
`

export const ReRecordBtn = styled.button`
  width: 47%;
  border-radius: 0.5rem;
  border: 0.1rem solid #bababa;
  color: #808080;
  font-size: 0.8rem;
  padding: 0.5rem 1.5rem;

  :focus {
    border: none;
    outline: none;
  }
`

export const CompleteRecordBtn = styled.button`
  width: 47%;
  color: #93b2d4;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 0.1rem solid #93b2d4;
  font-size: 0.7rem;
  padding: 0.5rem 1.5rem;
`

export const GoNextStepBtn = styled.button`
  width: 47%;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
  font-size: 0.8rem;
  padding: 0.5rem 1.5rem;
`
