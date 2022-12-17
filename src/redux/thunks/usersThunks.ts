import { IUser } from "../../interfaces/Users";
import { loadingActionCreator } from "../feature/uiSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL as string;

export const getAllUsersThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator({ loading: true }));

  try {
    const response = await fetch(`${url}users`);
    const data = (await response.json()) as IUser[];
    console.log(data);
    dispatch(loadingActionCreator({ loading: false }));
  } catch (error) {}
  dispatch(loadingActionCreator({ loading: false }));
};
