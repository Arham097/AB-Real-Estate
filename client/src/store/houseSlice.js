import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
  name: "house",
  initialState: {
    houseById: [],
  },
  reducers: {
    getHouseById: (state, action) => {
      state.houseById = action.payload;
    }
  }
})

export const { getHouseById } = houseSlice.actions;
export default houseSlice;