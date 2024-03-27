import { create } from 'zustand'
import { ShareQnAState, ShareStepState } from '@/types/familyShare'

export const useShareStepStore = create<ShareStepState>(set => ({
  shareStep: 0,
  setShareStep: (step: number) => set({ shareStep: step }),
}))

export const useQnAStepStore = create<ShareQnAState>(set => ({
  qnaStep: 0,
  setQnAStep: (step: number) => set({ qnaStep: step }),
}))
