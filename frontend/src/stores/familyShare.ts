import { create } from 'zustand'

interface ShareStepState {
  shareStep: number
  setShareStep: (step: number) => void
}

interface ShareQnAState {
  qnaStep: number
  setQnAStep: (step: number) => void
}

export const useShareStepStore = create<ShareStepState>(set => ({
  shareStep: 0,
  setShareStep: (step: number) => set({ shareStep: step }),
}))

export const useQnAStepStore = create<ShareQnAState>(set => ({
  qnaStep: 0,
  setQnAStep: (step: number) => set({ qnaStep: step }),
}))
