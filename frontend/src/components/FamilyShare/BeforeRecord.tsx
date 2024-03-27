import * as b from '@components/FamilyShare/style/BeforeRecordStyle'
import { useShareStepStore } from '@stores/familyShare.ts'

const BeforeRecord = () => {
  const { step, setStep } = useShareStepStore()
  const handleRecordClick = () => {
    setStep(step + 1)
  }

  return (
    <>
      <b.RecordStartBtn src="/icon/icon_record_start.png" onClick={handleRecordClick} />
      <b.InfoText>버튼을 누르면 녹음이 시작됩니다.</b.InfoText>
    </>
  )
}

export default BeforeRecord
