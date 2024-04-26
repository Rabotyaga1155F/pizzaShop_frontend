import { IPizza } from "@/types/pizza.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IPizza[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IPizza>) => {
      state.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((item) => item.pizzaId !== action.payload.id);
    },
    deleteAllItems: (state) => {
      return [];
    },
  },
});

export const { addItem, removeItem, deleteAllItems } = cartSlice.actions;
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
