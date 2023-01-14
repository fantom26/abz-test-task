import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AccessSlice from "./access/access.slice";
import PositionSlice from "./position/positions.slice";
import TranslationSlice from "./translation/translation.slice";
import UserSlice from "./user/user.slice";

const RootReducer = combineReducers({
  translation: TranslationSlice,
  position: PositionSlice,
  user: UserSlice,
  access: AccessSlice
});

export const store = configureStore({
  reducer: RootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
