import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    loginUser: (user: UserState, action: PayloadAction<UserState>) => ({
      ...action.payload,
      logged: true,
    }),
    logoutUser: () => ({
      ...initialState,
      logged: false,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
