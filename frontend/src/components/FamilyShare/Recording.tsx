import React, { ChangeEvent, useEffect, useState } from 'react'
import * as r from '@components/FamilyShare/style/RecordingStyle'
import useSpeechToText from '@hooks/useSpeechToText'
import AudioVisualizer from '@components/FamilyShare/AudioVisualizer'
import { useConvertTodayStore, useQnAStepStore, useShareStepStore } from '@stores/familyShare'
import { StepProps } from '@/types/familyShare'
import { useMutation } from 'react-query'
import { familyTodayConvert } from '@apis/familyShare'
import ConvertRecord from '@components/FamilyShare/ConvertRecord'

const Recording: React.FC<StepProps> = ({ recordType }) => {
  const [result, startListening, stopListening] = useSpeechToText()
  const [inputText, setInputText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [isCompleteRecord, setIsCompleteRecord] = useState(false)
  const { shareStep, setShareStep } = useShareStepStore()
  const { qnaStep, setQnAStep } = useQnAStepStore()
  const { setImage, setContent, memberId } = useConvertTodayStore()

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

  const { mutate, isLoading } = useMutation(familyTodayConvert, {
    onSuccess: data => {
      setShareStep(shareStep + 1)
      setImage(data.image)
      setContent(inputText)
    },
  })

  const handleSubmit = () => {
    if (recordType == 0) {
      mutate({ memberId: memberId, content: inputText })
    }
    if (recordType == 1) {
      setQnAStep(qnaStep + 1)
    }
  }

  return (
    <r.Container>
      {isLoading ? (
        <ConvertRecord />
      ) : (
        <>
          <r.TopContainer>
            <AudioVisualizer isCompleted={isCompleteRecord} />
          </r.TopContainer>

          <r.BottomContainer>
            <r.TextAreaInput value={inputText} onChange={handleInputChange} />
            <r.ButtonContainer>
              {isCompleteRecord ? <r.ReRecordBtn onClick={handleReRecord}>다시 녹음할래요!</r.ReRecordBtn> : <r.CompleteRecordBtn onClick={handleStopRecord}>녹음 그만 할게요!</r.CompleteRecordBtn>}
              <r.GoNextStepBtn onClick={handleSubmit}>{recordType === 0 ? `이대로 할게요!` : `이대로 질문 할게요!`}</r.GoNextStepBtn>
            </r.ButtonContainer>
          </r.BottomContainer>
        </>
      )}
    </r.Container>
  )
}

export default Recording
