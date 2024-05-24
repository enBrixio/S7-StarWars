// store/thunks/Thunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiSwapi } from "../../config/config";

export const fetchStarShips = createAsyncThunk('starships/ships', async (page) => {
    try {
        const request = await fetch(`${apiSwapi}starships?page=${page}`);
        if (request.ok) return await request.json();
    } catch (error) {
        console.error(error);
    }
});



