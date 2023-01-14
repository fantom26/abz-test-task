import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AccessService } from "services";

export const getTokenForRegistation = createAsyncThunk("access/getTokenForRegistation", async () => {
  try {
    const response = await AccessService.getToken();

    if (response.status !== 200) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    const getErrorMessage = (error: unknown) => {
      if (error instanceof Error) return error?.message;

      return null;
    };

    toast.error(getErrorMessage(error));
  }
});
