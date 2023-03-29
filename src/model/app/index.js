import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isModalOpen: "close",
  },
  reducers: {
    changeModal: (state, action) => {
      state.isModalOpen = action?.payload;
    },
  },
});

export const { changeModal } = appSlice.actions;
export default appSlice.reducer;
