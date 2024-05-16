import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiSwapi } from "../../config/config";

export const fetchStarShips = createAsyncThunk('starships/ships', async () => {
    try {
        const request = await fetch(`${apiSwapi}starships`);
        if (request.ok) return await request.json();
    }catch (error) {
        console.error(error);
      }
  })