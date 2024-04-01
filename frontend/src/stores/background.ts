import { create } from 'zustand'

interface BackgroundState {
  shareBackground: string[]
  paintBackground: string[]

  appendShareBackground: (image: string) => void
  appendPaintBackground: (image: string) => void
}

export const useBackgroundStore = create<BackgroundState>(set => ({
  shareBackground: [],
  paintBackground: [],

  appendShareBackground: (image: string) =>
    set(state => ({
      shareBackground: [...state.shareBackground, image],
      paintBackground: state.paintBackground,
    })),

  appendPaintBackground: (image: string) =>
    set(state => ({
      shareBackground: state.shareBackground,
      paintBackground: [...state.paintBackground, image],
    })),
}))
