import styled from 'styled-components'

interface ContainerProps {
  $cardColor?: string
}

export const Container = styled.div<ContainerProps>`
  width: 54px;
  height: 75px;
  border: 1px solid ${props => props.$cardColor || 'white'};
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2px;
  cursor: pointer;
`

export const ColorDiv = styled.div<ContainerProps>`
  width: 54px;
  height: 54px;
  background: ${props => props.$cardColor || 'white'};
`

export const ColorText = styled.div`
  height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 8px;
`
