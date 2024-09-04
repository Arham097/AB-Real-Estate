import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
  name: "house",
  initialState: {
    houseById: [],
    houses: [],
    locations: [],
  },
  reducers: {
    getHouseById: (state, action) => {
      state.houseById = action.payload;
    },
    getHouses: (state, action) => {
      state.houses = action.payload;
    },
    getLocations: (state, action) => {
      state.locations = action.payload;


    }
  }
});

export const { getHouseById, getHouses, getLocations } = houseSlice.actions;
export default houseSlice;