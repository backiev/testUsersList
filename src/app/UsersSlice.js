import { createSlice } from "@reduxjs/toolkit";
import data from '../data/generated.json'


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: data
    },
    reducers: {}
});

// export const {} = usersSlice.actions;

export default usersSlice.reducer;