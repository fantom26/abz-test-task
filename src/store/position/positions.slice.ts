import { createSlice } from "@reduxjs/toolkit";
import { GetPositionsResponse } from "services";
import { IPosition } from "utils/declarations";

import { getPositions } from "./positions.thunks";

type PositionStateProps = {
  positions: IPosition[];
  positionsStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const positionState: PositionStateProps = {
  positions: [],
  positionsStatus: "idle",
  error: null
};

const PositionSlice = createSlice({
  name: "position",
  initialState: positionState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPositions.pending, (state) => {
        state.positionsStatus = "loading";
        state.error = null;
      })
      .addCase(getPositions.fulfilled, (state, action) => {
        const { positions } = action.payload as GetPositionsResponse;
        state.positions = positions;
        state.positionsStatus = "succeeded";
      });
  }
});

export const PositionActions = {
  ...PositionSlice.actions,
  getPositions
};

export default PositionSlice.reducer;
