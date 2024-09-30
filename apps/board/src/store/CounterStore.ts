import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

export const CounterStore = create(
  immer<State>((set) => ({
    count: 0,
    increase: () =>
      set((state) => {
        state.count = state.count * 2;
      }),
    decrease: () =>
      set((state) => {
        state.count = state.count -= 3;
      }),
    reset: () =>
      set((state) => {
        state.count = 0;
      }),
  }))
);

export default CounterStore;
