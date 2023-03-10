import { IUser } from "../../interfaces/Users";
import { loadingActionCreator } from "../feature/uiSlice/uiSlice";
import { loadUsersActionCreator } from "../feature/usersSlice/usersSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL as string;

export const getAllUsersThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator(true));

  try {
    const response = await fetch(`${url}users`);
    const data = (await response.json()) as IUser[];

    dispatch(loadingActionCreator(false));
    dispatch(loadUsersActionCreator(data));
  } catch (error) {}
  dispatch(loadingActionCreator(false));
};

export const getUserByIdThunk =
  (userId: string) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator(true));

    try {
      const response = await fetch(`${url}users/${userId}`);
      const userData = (await response.json()) as IUser;

      dispatch(loadingActionCreator(false));
      return userData;
    } catch (error) {}
    dispatch(loadingActionCreator(false));
  };
