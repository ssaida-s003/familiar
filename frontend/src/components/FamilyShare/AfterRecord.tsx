import * as a from '@components/FamilyShare/style/AfterRecord'

const AfterRecord = () => {
  // const { image, content } = useConvertTodayStore()
  return (
    <>
      <a.ImgContainer>
        <a.InfoText>텍스트의 위치를 바꿀 수 있어요!</a.InfoText>
      </a.ImgContainer>
      <a.ButtonContainer>
        <a.ReConvertBtn>다시 생성할래요!</a.ReConvertBtn>
        <a.GoNextStepBtn>이대로 답변할게요!</a.GoNextStepBtn>
      </a.ButtonContainer>
    </>
  )
}

export default AfterRecord
