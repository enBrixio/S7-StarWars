import { createSlice } from "@reduxjs/toolkit";
import { fetchStarShips } from "../thunks/Thunks";

const shipsSlices = createSlice({
    name: "ships",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        addShips: (state, action) => action.payload       
    },

    extraReducers: (builder) => {
    builder.addCase(fetchStarShips.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchStarShips.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload.results]
    });
    builder.addCase(fetchStarShips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
    });

}
}); 

export const { addShips } = shipsSlices.actions;

export default shipsSlices.reducer;