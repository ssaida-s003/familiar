import * as a from '@common/style/AxiosErrorStyle'

const AxiosError = () => {
  return (
    <a.ErrorContainer>
      예기치 못한 에러가 발생하였습니다.
      <a.ReturnButton onClick={() => window.location.reload()}>뒤로가기</a.ReturnButton>
    </a.ErrorContainer>
  )
}

export default AxiosError
