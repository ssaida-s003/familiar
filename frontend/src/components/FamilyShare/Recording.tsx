import React, { ChangeEvent, useEffect, useState } from 'react'
import * as r from '@components/FamilyShare/style/RecordingStyle'
import useSpeechToText from '@hooks/useSpeechToText'
import AudioVisualizer from '@components/FamilyShare/AudioVisualizer'
import { useQnAStepStore, useShareStepStore } from '@stores/familyShare'
import { StepProps } from '@/types/familyShare'

const Recording: React.FC<StepProps> = ({ recordType }) => {
  const [result, startListening, stopListening] = useSpeechToText()
  const [inputText, setInputText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [isCompleteRecord, setIsCompleteRecord] = useState(false)
  const { shareStep, setShareStep } = useShareStepStore()
  const { qnaStep, setQnAStep } = useQnAStepStore()

  useEffect(() => {
    setTimeout(() => {
      !isCompleteRecord && startListening()
    }, 500)
  }, [startListening, isCompleteRecord])

  const handleStopRecord = () => {
    stopListening()
    setIsCompleteRecord(true)
  }

  useEffect(() => {
    if (!isEditing) {
      setInputText(result.text)
    }
  }, [result.text, isEditing])

  const handleReRecord = () => {
    setInputText('')
    setIsEditing(false)
    setIsCompleteRecord(false)
    startListening()
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIsEditing(true)
    setInputText(e.target.value)
    setIsEditing(false)
  }

  const handleSubmit = () => {
    if (recordType == 0) {
      setShareStep(shareStep + 1)
    }
    if (recordType == 1) {
      setQnAStep(qnaStep + 1)
    }
  }

  return (
    <>
      <r.TopContainer>
        <AudioVisualizer isCompleted={isCompleteRecord} />
      </r.TopContainer>

      <r.BottomContainer>
        <r.TextAreaInput value={inputText} onChange={handleInputChange} />
        <r.ButtonContainer>
          {isCompleteRecord ? <r.ReRecordBtn onClick={handleReRecord}>다시 녹음할래요!</r.ReRecordBtn> : <r.CompleteRecordBtn onClick={handleStopRecord}>녹음 그만 할게요!</r.CompleteRecordBtn>}
          <r.GoNextStepBtn onClick={handleSubmit}>이대로 할게요!</r.GoNextStepBtn>
        </r.ButtonContainer>
      </r.BottomContainer>
    </>
  )
}

export default Recording
