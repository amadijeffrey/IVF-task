import { createSlice } from "@reduxjs/toolkit";
const sampleClient = {
  value: {
    userType: "",
  },
};

export const clientSlice = createSlice({
  name: "client",
  initialState: sampleClient,
  reducers: {
    updateClientData: (state, action) => {
      let keys = Object.keys(action.payload);
      keys.map((key) => {
        state.value[key] = action.payload[key];
        return true;
      });
    },
  },
});

export const { updateClientData } = clientSlice.actions;

export default clientSlice.reducer;
