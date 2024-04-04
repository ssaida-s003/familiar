import React from 'react'
import * as b from '@components/FamilyShare/style/BeforeRecordStyle'
import { useQnAStepStore, useShareStepStore } from '@stores/familyShare'
import { StepProps } from '@/types/familyShare'

const BeforeRecord: React.FC<StepProps> = ({ recordType }) => {
  const { shareStep, setShareStep } = useShareStepStore()
  const { qnaStep, setQnAStep } = useQnAStepStore()

  const handleRecordClick = () => {
    if (recordType == 0) {
      setShareStep(shareStep + 1)
    }
    if (recordType == 1) {
      setQnAStep(qnaStep + 1)
    }
  }

  return (
    <>
      <b.RecordStartBtn src="/icon/icon_record_start.png" onClick={handleRecordClick} />
      <b.InfoText>버튼을 누르면 녹음이 시작됩니다.</b.InfoText>
    </>
  )
}

export default BeforeRecord
