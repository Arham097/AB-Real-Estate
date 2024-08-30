import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import houseSlice from "./houseSlice";


const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    house: houseSlice.reducer,

  },
});
export default store;
