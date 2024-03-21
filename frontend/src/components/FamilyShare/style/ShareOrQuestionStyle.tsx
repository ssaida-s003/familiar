import styled from 'styled-components'

interface ShareOrQuestionProps {
  $shareOrQuestion: number
}

export const Container = styled.div`
  width: 100%;
  margin: 5% 0;
`

export const SelectedContainer = styled.div<ShareOrQuestionProps>`
  width: 90%;
  height: 55.3px;
  margin: 0 5%;
  background-image: url(${props => (props.$shareOrQuestion === 1 ? '/icon/icon_today_share_big.png' : '/icon/icon_question_big.png')});
  background-size: cover;
  background-position: center;
`

export const ShareOrQuestionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const ShareContainerSmall = styled.div`
  width: 66.4px;
  height: 90.6px;
  background-image: url('/icon/icon_today_share_small.png');
  background-size: cover;
  background-position: bottom;
`

export const QuestionContainerSmall = styled.div`
  width: 66.4px;
  height: 90.9px;
  background-image: url('/icon/icon_question_small.png');
  background-size: cover;
  background-position: center;
`
