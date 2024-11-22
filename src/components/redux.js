import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: [],

  reducers: {

    addToCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {

        state[itemIndex].quantity += 1; 
    
      } else {
        state.push({ ...action.payload, quantity: 1 }); 
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


const cartSlice1 = createSlice({
  name: 'wishlist',

  initialState: [],

  reducers: {

    addToWishlist: (state, action) => {
      // const itemIndex = state.findIndex(item => item.id === action.payload.id);

      // if (itemIndex >= 0) {

      //   state[itemIndex].quantity += 1; 
    
      // } else {
        state.push({ ...action.payload, quantity: 1 }); 
      // }
    },

    removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },

    clearWishlist: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const {addToWishlist,removeFromWishlist,clearWishlist} = cartSlice1.actions;



const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: cartSlice1.reducer,
  },
});





export default store;