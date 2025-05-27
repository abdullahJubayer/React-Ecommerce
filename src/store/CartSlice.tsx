import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../hooks/useProducts";

const initialState: { items: Array<ProductModel> } = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart: (state, actions: PayloadAction<ProductModel>) => {
      const index = state.items.findIndex(
        (item) => item.id == actions.payload.id
      );
      if (index === -1) state.items = [...state.items, actions.payload];
    },
    updateCart: (state, actions: PayloadAction<ProductModel>) => {
      state.items = state.items.map((item) =>
        item.id === actions.payload.id ? actions.payload : item
      );
    },
    deleteCart: (state, actions: PayloadAction<ProductModel>) => {
      const filterItems = state.items.filter(
        (item) => item.id !== actions.payload.id
      );
      state.items = filterItems;
    },
  },
});

export const { addCart, updateCart, deleteCart } = CartSlice.actions;
export default CartSlice.reducer;
