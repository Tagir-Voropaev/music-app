import { create } from "zustand";

interface AuthState {
    users: object[];
    loading: boolean;
    error: string | null;
    addUser: (name: string, email: string, password: string) => void;
}

export const useReg = create(set => ({
    users: [],
    loading: false,
    error: null,
   
}))