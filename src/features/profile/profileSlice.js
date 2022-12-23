import { createSlice } from "@reduxjs/toolkit";


const user = JSON.parse(localStorage.getItem('user'))

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        user: "",
        projects: [],
        invitations: []
    },
    reducers: {
    }


})

export const { } = profileSlice.actions;
export default profileSlice.reducer;



