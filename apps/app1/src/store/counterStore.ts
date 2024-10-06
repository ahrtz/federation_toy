import { create, StoreApi, UseBoundStore } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

// 명시적인 타입 주석 추가
export const useCounterStore1: UseBoundStore<StoreApi<State>> = create<State>()(
  immer((set) => ({
    count: 0,
    increase: () =>
      set((state) => {
        state.count += 1;
      }),
    decrease: () =>
      set((state) => {
        state.count -= 1;
      }),
    reset: () =>
      set((state) => {
        state.count = 0;
      }),
  }))
);

export default useCounterStore1;
