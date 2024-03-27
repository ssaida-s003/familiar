import styled from 'styled-components'

interface ShareOrQuestionProps {
  $shareOrQuestion: number
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3%;
`

export const SelectedContainer = styled.div<ShareOrQuestionProps>`
  width: 90%;
  height: 21.3vh;
  margin: 0 5%;
  background-image: url(${props => (props.$shareOrQuestion === 1 ? '/icon/icon_today_share_big.png' : '/icon/icon_question_big.png')});
  background-size: cover;
  background-position: center;
`

export const ShareOrQuestionContainer = styled.div`
  width: 90%;
  height: 32vh;
  display: flex;
  justify-content: space-between;
`

export const ShareContainerSmall = styled.div`
  box-sizing: border-box;
  padding: 2%;
  width: 46%;
  background-image: url('/icon/icon_today_share_small.png');
  background-size: cover;
  background-position: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
`

export const QuestionContainerSmall = styled.div`
  box-sizing: border-box;
  padding: 2%;
  width: 46%;
  height: 100%;
  background-image: url('/icon/icon_question_small.png');
  background-size: cover;
  background-position: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
`

export const TopContainer = styled.div``

export const BottomContainer = styled.div``

export const Title = styled.div`
  color: #666;
  font-size: 10px;
  margin: 2% 5%;
`

export const FamilyIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FamilyIcon = styled.img``

export const SubTitle = styled.div`
  width: 90%;
  margin: 7% auto;
  font-weight: 700;
  font-size: 1rem;
`

export const GoNexStepBtn = styled.button`
  width: 90%;
  height: 2rem;
  border: none;
  border-radius: 1rem;
  margin: 5%;
  background: #80add9;
`
