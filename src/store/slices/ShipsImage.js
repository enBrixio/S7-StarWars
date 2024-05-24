import { createSlice } from "@reduxjs/toolkit";
import { fetchStarShipsImage } from "../thunks/Thunks";

const shipsSlicesImage = createSlice({
    name: "shipsImage",
    initialState: {
        dataImage: [],
        loading: false,
        error: null
    },
    reducers: {
        addShipsImage: (state, action) => action.payload       
    },

    extraReducers: (builder) => {
    builder.addCase(fetchStarShipsImage.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchStarShipsImage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.dataImage, ...action.payload.results]
    });
    builder.addCase(fetchStarShipsImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
    });

}
}); 

export const { addShipsImage } = shipsSlicesImage.actions;

export default shipsSlicesImage.reducer;