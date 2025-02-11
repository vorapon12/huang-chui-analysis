import { create } from "zustand";

// 📌 กำหนด Type ของ State
interface UnitState {
  unit: number;
  setUnit: (newUnit: number) => void;
}

// 📌 สร้าง Zustand Store
export const useUnitStore = create<UnitState>((set) => ({
  unit: 0,
  setUnit: (newUnit) => set({ unit: newUnit }),
}));
