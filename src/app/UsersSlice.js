import { createSlice } from "@reduxjs/toolkit";
import data from '../data/generated.json'


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: data.slice(0, 50)
    },
    reducers: {
        // Изменение количества пользователей, для оптимизации рендеринга списка
        changeSlice: (state, action) => {
            state.users = data.slice(0, action.payload)
        },
        // Обработка инпутов
        changeField: (state, {payload: {userId, property, value}}) => {
            state.users[userId][property] = value;
        }
    }
});

export const {changeSlice, changeField} = usersSlice.actions;

export default usersSlice.reducer;