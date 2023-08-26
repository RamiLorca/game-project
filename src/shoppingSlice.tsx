import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export interface ShoppingState {
    products: Product[];
    cart: { [key: number]: number };
    totalAmount: number;
}

const initialState: ShoppingState = {
    products: [
      { id: 1, title: "Sencha", price: 5, quantity: 0 },
      { id: 2, title: "Matcha", price: 15, quantity: 0 }, 
      { id: 3, title: "Oolong", price: 8, quantity: 0 },  
    ],
    cart: {},
    totalAmount: 0
};

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const product = action.payload;
            if (!state.cart[product.id]) {
                state.cart[product.id] = 1;
            } else {
                state.cart[product.id]++;
            }
            state.totalAmount += product.price;
        }
    }
});

export const { addToCart } = shoppingSlice.actions;

export default shoppingSlice.reducer;