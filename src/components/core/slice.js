import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "ACCESSTOKEN",
  initialState: {
    accessToken: null,
  },
  reducers: {
    updateAccessToken: (state, action) => {
      console.log(action);
      state.accessToken = action.payload;
    },
  },
});

export const { updateAccessToken } = slice.actions;

export default slice.reducer;