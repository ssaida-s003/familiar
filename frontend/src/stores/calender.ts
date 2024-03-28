import { create } from 'zustand'
import { TodayDateSTate } from '@/types/familyShare'

export const useTodayDateStore = create<TodayDateSTate>(set => ({
  date: '',
  setDate: (date: string) => set({ date: date }),
}))
