export interface FamilyShareRecordResType {
  recordId: number
  memberId: number
  content: string
  url: string
  createdAt: string
}

interface Answer {
  id: number
  memberId: number
  url: string
}

export interface QnARecordResType {
  questionId: number
  memberId: number
  content: string
  answers: Answer[]
}
