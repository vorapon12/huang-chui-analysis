import { create } from "zustand";

// 📌 กำหนด Type ของ State
interface UnitState {
  house_number: string;
  direction: string;
  zone: string;
  floor: number;
  birth_date: string;
  phone_number: string;
  dataRes: string;
  selectedUnit: string;
  name: string;
  setUnit: (
    house_number: string,
    direction: string,
    zone: string,
    floor: number,
    birth_date: string,
    phone_number: string,
    name: string
  ) => void;
  setDataRes: (dataRes: string) => void;
  setSelectedUnit: (selectedUnit: string, floor: number) => void;
}

export const useUnitStore = create<UnitState>((set) => ({
  house_number: "",
  direction: "",
  zone: "",
  floor: 0,
  birth_date: "",
  phone_number: "",
  dataRes: "",
  selectedUnit: "",
  name: "",
  setSelectedUnit: (selectedUnit: string, floor: number) => {
    set({
      selectedUnit,
      floor,
    });
  },
  setUnit: (
    house_number: string,
    direction: string,
    zone: string,
    floor: number,
    birth_date: string,
    phone_number: string,
    name: string
  ) =>
    set({
      house_number,
      direction,
      zone,
      floor,
      birth_date,
      phone_number,
      name,
    }),
  setDataRes: (dataRes: string) => {
    set({
      dataRes,
    });
  },
}));
