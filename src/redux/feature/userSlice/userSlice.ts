import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../../interfaces/Users";

const initialState: UserState = {
  logged: false,
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (user: UserState) => ({
      ...user,
      logged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;

export default userSlice.reducer;
