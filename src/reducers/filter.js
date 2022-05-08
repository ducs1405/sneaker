import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categories: "",
        isCategories: false,
        colors: "",
        isColors: false,
        sizes: ""
    },
    reducers: {
        getCategories(state, {set}, action) {
            state.categories = set;
            state.isCategories = true;
        },
        getColors(state, {o}, action) {
            state.colors = o;
            state.isColors = true;
        },
        getSizes(state, {o}, action) {
            state.sizes = o;
        },
    },
});

export const { getCategories, getColors, getSizes } = filterSlice.actions;

export default filterSlice.reducer;