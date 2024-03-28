import { create } from 'zustand'
import { ConvertTodayState, ShareQnAState, ShareStepState, TodayDateSTate } from '@/types/familyShare'

export const useShareStepStore = create<ShareStepState>(set => ({
  shareStep: 0,
  setShareStep: (step: number) => set({ shareStep: step }),
}))

export const useQnAStepStore = create<ShareQnAState>(set => ({
  qnaStep: 0,
  setQnAStep: (step: number) => set({ qnaStep: step }),
}))

export const useConvertTodayStore = create<ConvertTodayState>(set => ({
  memberId: 0,
  content: '',
  image: '',
  setMemberId: (memberId: number) => set({ memberId: memberId }),
  setContent: (content: string) => set({ content: content }),
  setImage: (image: string) => set({ image: image }),
}))

export const useTodayDateStore = create<TodayDateSTate>(set => ({
  date: '2024-03-01',
  setDate: (date: string) => set({ date: date }),
}))
