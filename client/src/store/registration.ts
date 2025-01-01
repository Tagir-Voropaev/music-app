import { create } from "zustand";

interface State {
    isAuth: boolean
}

export const useReg = create<State>((set) => ({
    isAuth: false,
    setIsAuth: (value: boolean) => set({isAuth: value})
}))