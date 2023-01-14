import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { GetPositionsResponse, PositionService } from "services";

export const getPositions = createAsyncThunk("position/getPositions", async () => {
  try {
    const response = await PositionService.getPositions();

    if (response.status !== 200) {
      throw new Error();
    }

    return response.data as GetPositionsResponse;
  } catch (error) {
    const getErrorMessage = (error: unknown) => {
      if (error instanceof Error) return error?.message;

      return null;
    };

    toast.error(getErrorMessage(error));
  }
});
