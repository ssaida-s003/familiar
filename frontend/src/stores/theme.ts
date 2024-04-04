import { create } from 'zustand'

interface themeState {
  mainColor: string
  setMainColor: (mainColor: string) => void
}

export const useThemeStore = create<themeState>(set => ({
  mainColor: 'F0EFED',
  setMainColor: (color: string) => set({ mainColor: color }),
}))
