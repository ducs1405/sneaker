import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        navbar: false,
    },
    reducers: {
        openNavbar(state, action) {
            state.navbar = true;
        },
        closeNavbar(state, action) {
            state.navbar = false;
        },
    },
});

export const { openNavbar, closeNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;