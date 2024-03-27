import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  background: linear-gradient(144deg, #fff -13.94%, rgba(255, 255, 255, 0) 112.31%);
  border-radius: 1rem;
  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(0.5rem);
  border: 0.05rem solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const RecordStartBtn = styled.img`
  width: 16%;
  height: auto;
  cursor: pointer;
`

export const InfoText = styled.div`
  font-size: 1rem;
  margin: 0.5rem 0;
`
