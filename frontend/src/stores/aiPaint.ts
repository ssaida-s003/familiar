import { create } from 'zustand'

interface PaintState {
  title: string
  originalImage: string
  setTitle: (title: string) => void
  setOriginalImage: (image: string) => void
}

export const usePaintStore = create<PaintState>(set => ({
  title: '',
  originalImage: '',

  setTitle: title => set(() => ({ title })),
  setOriginalImage: originalImage => set(() => ({ originalImage })),
}))

interface BackgroundState {
  convertPaint: string
  setConvertPaint: (convertPaint: string) => void
}

export const useBackgroundStore = create<BackgroundState>(set => ({
  convertPaint: '',
  setConvertPaint: convertPaint => set(() => ({ convertPaint })),
}))
