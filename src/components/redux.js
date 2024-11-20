import { configureStore, createSlice } from '@reduxjs/toolkit';

// Step 1: Create a cart slice
const cartSlice = createSlice({
  name: 'cart',

  initialState: [],

  reducers: {

    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const itemIndex = state.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {

        state[itemIndex].quantity += 1; // Increase quantity if already in cart
    
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Add new item
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },

    clearCart: () => {
      return [];
    },
  },
});




// Export actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Step 2: Configure store



const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});





export default store;