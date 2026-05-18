import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
  status: "active" | "inactive";
};

const initialState: CounterState = {
  value: 0,
  status: "inactive",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    reset(state) {
      state.value = 0;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    setStatus(state, action: PayloadAction<CounterState["status"]>) {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount, setStatus } =
  counterSlice.actions;

export default counterSlice.reducer;
