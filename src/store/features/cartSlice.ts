import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cart {
  id: string;
  // cartItems: string;
  cartTotalQuantity: number;
  // cartTotalAmount: number;
}

interface CartState {
  cart: cart[];
  cartTotalQuantity: 0;
  cartTotalAmount: 0;
}

const initialState: CartState = {
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.cartTotalQuantity++;
      } else {
        state.cart.push({ ...action.payload, cartTotalQuantity: 1 });
      }
    },
    // },
    //   removeItem: (state, action:PayloadAction<{
    //     cartItems: string;}>) => {
    //     const removeItem = state.cart.filter((item) => item.id !== action.payload);
    //     state.cart = removeItem;
    //   },
    // }
  },
});

export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;
