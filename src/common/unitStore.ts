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
  setUnit: (
    house_number: string,
    direction: string,
    zone: string,
    floor: number,
    birth_date: string,
    phone_number: string
  ) => void;
  setDataRes: (dataRes: string) => void;
}

export const useUnitStore = create<UnitState>((set) => ({
  house_number: "",
  direction: "",
  zone: "",
  floor: 0,
  birth_date: "",
  phone_number: "",
  dataRes: "",
  setUnit: (
    house_number: string,
    direction: string,
    zone: string,
    floor: number,
    birth_date: string,
    phone_number: string
  ) =>
    set({
      house_number,
      direction,
      zone,
      floor,
      birth_date,
      phone_number,
    }),
  setDataRes: (dataRes: string) => {
    set({
      dataRes,
    });
  },
}));
