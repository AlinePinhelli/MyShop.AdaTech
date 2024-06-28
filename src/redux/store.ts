import { rootReducer } from "./User/root-reducer";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
});
