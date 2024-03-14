import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const TitleContainer = styled.div`
  position: absolute;
  top: 10px;
  left: -300px;
`

export const Title = styled.div`
  font-size: 20px;
`

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 3%;
  z-index: 1;
  position: relative; /* 위치 상대적으로 변경 */
`

export const Refrigerator = styled.img<{ scrollY: number }>`
  width: calc(39% + ${props => props.scrollY * 0.1}px);
`
