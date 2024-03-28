export interface DateReqType {
  date: string
}

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

export interface TodayDateState {
  date: string
  setDate: (date: string) => void
}

export interface ResponseCategory {
  categoryId: number
  setCategoryId: (categoryId: number) => void
}

export interface TodayShareResponse {
  todayShareResponse: FamilyShareRecordResType[]
  setTodayShareResponse: (todayShareResponse: FamilyShareRecordResType[]) => void
}
