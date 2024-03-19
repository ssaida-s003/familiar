import styled from 'styled-components'

interface ContainerProps {
  $quadrantNum: number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${props => {
    switch (props.$quadrantNum) {
      case 0:
        return '35px'
      case 1:
        return '35px'
      case 2:
        return '380px'
      case 3:
        return '380px'
      default:
        return '35px'
    }
  }};
  left: ${props => {
    switch (props.$quadrantNum) {
      case 0:
        return '350px'
      case 1:
        return '-350px'
      case 2:
        return '-350px'
      case 3:
        return '350px'
      default:
        return '-350px'
    }
  }};
  width: ${props => {
    switch (props.$quadrantNum) {
      case 0:
        return '30px'
      default:
        return '332px'
    }
  }};
  height: ${props => {
    switch (props.$quadrantNum) {
      case 0:
        return '30px'
      default:
        return '290px'
    }
  }};
  flex-shrink: 0;
  border-radius: 22px;
  border: 1.3px solid #fff;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%);
`

export const Title = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 5px;
  font-weight: 700;
`

export const CardSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
