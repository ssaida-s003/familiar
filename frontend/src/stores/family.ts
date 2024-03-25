import { create } from 'zustand'

interface FamilyState {
  familyId: number
  setFamilyId: (id: number) => void
}

export const useFamilyStore = create<FamilyState>(set => ({
  familyId: 1,
  setFamilyId: (id: number) => set({ familyId: id }),
}))
