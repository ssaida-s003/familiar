import { create } from 'zustand'
import { ResponseCategory, TodayDateState } from '@/types/calender'

export const useTodayDateStore = create<TodayDateState>(set => ({
  date: '',
  setDate: (date: string) => set({ date: date }),
}))

export const useResponseCategory = create<ResponseCategory>(set => ({
  categoryId: 0,
  setCategoryId: (categoryId: number) => set({ categoryId: categoryId }),
}))
