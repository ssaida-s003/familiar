import { create } from 'zustand'
import { FamilyShareRecordResType, ResponseCategory, TodayDateState, TodayShareResponse } from '@/types/calender'

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
