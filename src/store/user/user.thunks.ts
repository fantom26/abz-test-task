import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { UsersService } from "services";

export const getUsers = createAsyncThunk("user/getUsers", async (params: { page: number; count: number }) => {
  try {
    const { page, count } = params;
    const response = await UsersService.getUsers(page, count);

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
