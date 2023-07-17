import { configureStore } from '@reduxjs/toolkit';
import UsersSlice from './UsersSlice.js';



export const store = configureStore({
  reducer: {
    users: UsersSlice,
  },
});
