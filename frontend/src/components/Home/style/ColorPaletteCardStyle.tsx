import styled from 'styled-components'

interface ContainerProps {
  cardcolor?: string
}

export const Container = styled.div<ContainerProps>`
  width: 54px;
  height: 75px;
  border: 1px solid ${props => props.cardcolor || 'white'};
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2px;
  cursor: pointer;
`

export const ColorDiv = styled.div<ContainerProps>`
  width: 46px;
  height: 46px;
  margin: 4px 2px;
  background: ${props => props.cardcolor || 'white'};
`

export const ColorText = styled.div`
  text-align: center;
  font-size: 8px;
`
