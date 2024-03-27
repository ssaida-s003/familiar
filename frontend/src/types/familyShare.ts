export interface PostTodayReqType {
  memberId: number
  content: string
  url: string
}

export interface FamilyTodayConvertReqType {
  memberId: number
  content: string
}

export interface StepProps {
  recordType: number
}

export interface ShareStepState {
  shareStep: number
  setShareStep: (step: number) => void
}

export interface ShareQnAState {
  qnaStep: number
  setQnAStep: (step: number) => void
}
