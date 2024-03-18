import create from 'zustand'

interface ColorState {
  selectedColorCode: string[]
  updateSelectedColorCode: (quadrant: number, colorCode: string) => void
}

export const useColorStore = create<ColorState>(set => ({
  selectedColorCode: ['', '', '', ''],
  updateSelectedColorCode: (quadrant: number, colorCode: string) =>
    set(state => {
      const newColorCodes = [...state.selectedColorCode]
      newColorCodes[quadrant] = colorCode
      return { selectedColorCode: newColorCodes }
    }),
}))
