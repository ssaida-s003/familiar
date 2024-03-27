import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const LoadingIcon = styled.img`
  width: 15%;
  margin: 2%;
  animation: ${bounce} 1.5s cubic-bezier(0, 0.4, 0.7, 0.99) infinite alternate;
`

export const InfoText = styled.div`
  margin: 2%;
  text-align: center;
  font-weight: 700;
`
