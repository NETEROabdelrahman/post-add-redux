import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: '0', name: 'adel' },
    { id: '1', name: 'abdelrahman' },
    { id: '2', name: 'saleh' }
]


export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})


export default UsersSlice.reducer;