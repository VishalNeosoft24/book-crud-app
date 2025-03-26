import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
    name: 'bookObject',
    initialState: {
        value: {
            totalBooks: 100
        }
    },
    reducers: {
        updateTotalBooks: (state) => {
            state.value.totalBooks += 1;
        }
    }
})

export const { updateTotalBooks } = BookSlice.actions;
