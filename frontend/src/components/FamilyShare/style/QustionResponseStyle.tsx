import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  min-height: 2rem;
  display: flex;
  margin: 1rem;
  padding: 1rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.05rem solid white;
  border-radius: 1rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%);
`

export const QuestionerImg = styled.img`
  width: 12%;
  height: auto;
  border-radius: 5rem;
  margin-bottom: 0.5rem;
`

export const QuestionText = styled.div`
  text-align: center;
  margin: 0 auto;
  display: flex;
`

export const Q = styled.div`
  font-weight: 700;
  margin-right: 1rem;
`
