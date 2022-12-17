import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/Users";

const initialState: IUser[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    loadUsers: (currentUsers, action: PayloadAction<IUser[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;

export default usersSlice.reducer;
