import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import UsersSlice from './UsersSlice.js';



export const store = configureStore({
  reducer: {
    users: UsersSlice,
   //  // counter: counterReducer,
  },
});
