import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const res = await axios(USERS_URL)
        console.log(res.data)
        return res.data;
    } catch (error) {
        return error.msg;
    }
});


export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) => {
   return state.users.find(user=>user.id === userId)
}

export default UsersSlice.reducer;