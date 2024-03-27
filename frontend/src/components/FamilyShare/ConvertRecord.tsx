import * as c from '@components/FamilyShare/style/ConvertRecordStyle.tsx'

const ConvertRecord = () => {
  return (
    <c.Container>
      <c.LoadingIcon src="/icon/icon_converting.png" alt="그림 생성 중" />
      <c.InfoText>
        배경 그림을 생성중이에요!
        <br />
        조금만 기다려주세요!
      </c.InfoText>
    </c.Container>
  )
}

export default ConvertRecord
