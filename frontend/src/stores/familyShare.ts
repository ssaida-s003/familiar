import { create } from 'zustand'

interface ShareStepState {
  step: number
  setStep: (step: number) => void
}

export const useShareStepStore = create<ShareStepState>(set => ({
  step: 0,
  setStep: (step: number) => set({ step: step }),
}))
