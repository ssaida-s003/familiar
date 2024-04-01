import { create } from 'zustand'
import { FamilyShareRecordResType, QnARecordResType, QnAResponse, ResponseCategory, TodayDateState, TodayShareResponse } from '@/types/calendar'

export const useTodayDateStore = create<TodayDateState>(set => ({
  date: '',
  setDate: (date: string) => set({ date: date }),
}))

export const useResponseCategory = create<ResponseCategory>(set => ({
  categoryId: 0,
  setCategoryId: (categoryId: number) => set({ categoryId: categoryId }),
}))

export const useTodayShareResponse = create<TodayShareResponse>(set => ({
  todayShareResponse: [],
  setTodayShareResponse: (todayShareResponse: FamilyShareRecordResType[]) => set({ todayShareResponse: todayShareResponse }),
}))

export const useQnAResponse = create<QnAResponse>(set => ({
  qnAResponse: {
    questionId: -1,
    memberId: -1,
    content: '',
    answers: [],
  },
  setQnAResponse: (qnAResponse: QnARecordResType) => set({ qnAResponse: qnAResponse }),
}))
