import { createSlice } from "@reduxjs/toolkit";
import { GetTokenResponse } from "services";

import { getTokenForRegistation } from "./access.thunks";

type AccessStateProps = {
  token: string;
  tokenStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const accessState: AccessStateProps = {
  token: "",
  tokenStatus: "idle",
  error: null
};

const AccessSlice = createSlice({
  name: "access",
  initialState: accessState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTokenForRegistation.pending, (state) => {
        state.tokenStatus = "loading";
        state.error = null;
      })
      .addCase(getTokenForRegistation.fulfilled, (state, action) => {
        const { token } = action.payload as GetTokenResponse;
        state.token = token;
        state.tokenStatus = "succeeded";
      });
  }
});

export const AccessActions = {
  ...AccessSlice.actions,
  getTokenForRegistation
};

export default AccessSlice.reducer;
