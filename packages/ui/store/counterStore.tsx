import {create} from "zustand";

// Zustand 상태 정의
export const counterStore = create((set:any) => ({
  count: 0,
  increase: () => set((state:any) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

export default counterStore;