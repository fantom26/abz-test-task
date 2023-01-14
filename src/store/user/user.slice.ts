import { createSlice } from "@reduxjs/toolkit";
import { GetUsersResponse } from "services";
import { IUser } from "utils/declarations";

import { getUsers } from "./user.thunks";

type UsersStateProps = {
  users: IUser[];
  usersStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  limit: number;
  page: number;
  hasMore: boolean | null;
  userRegistered: boolean;
};

const userState: UsersStateProps = {
  users: [],
  limit: 6,
  page: 1,
  usersStatus: "idle",
  error: null,
  hasMore: null,
  userRegistered: false
};

const UsersSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    incrementPage(state) {
      state.page++;
    },
    resetStoreUsers(state) {
      state.userRegistered = true;
      state.page = 1;
      state.users = [];
      state.usersStatus = "idle";
      state.error = null;
      state.hasMore = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.usersStatus = "loading";
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const { users, links } = action.payload as GetUsersResponse;
        state.users = [...state.users, ...users];
        state.usersStatus = "succeeded";
        if (links.next_url) {
          state.hasMore = true;
        } else {
          state.hasMore = false;
        }
      });
  }
});

export const UsersActions = {
  ...UsersSlice.actions,
  getUsers
};

export default UsersSlice.reducer;
