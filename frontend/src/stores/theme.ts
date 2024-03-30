import { create } from 'zustand'

export interface themeState {
  mainColor: string
  setMainColor: (mainColor: string) => void
}

const useThemeStore = create<themeState>(set => ({
  mainColor: '#F0EFED',
  setMainColor: (color: string) => set(() => ({ mainColor: color })),
}))

export default useThemeStore
