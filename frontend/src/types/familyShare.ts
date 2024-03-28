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

export interface ConvertTodayState {
  memberId: number
  content: string
  image: string
  setMemberId: (memberId: number) => void
  setContent: (content: string) => void
  setImage: (image: string) => void
}

export interface TodayDateSTate {
  date: string
  setDate: (date: string) => void
}
