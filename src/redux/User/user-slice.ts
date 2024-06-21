import { createSlice } from "@reduxjs/toolkit";
interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    login: (state, action) => {},
  },
});
