import { RawPost } from "../../interfaces/Post";
import { IUser } from "../../interfaces/Users";
import { constructData } from "../../utils/postsConstructor";
import { loadPostsActionCreator } from "../feature/postsSlice";
import { loadingActionCreator } from "../feature/uiSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL as string;

export const getAllPostsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator({ loading: true }));

  try {
    const postsResponse = await fetch(`${url}posts`);
    const postsData = (await postsResponse.json()) as RawPost[];
    const usersResponse = await fetch(`${url}users`);
    const usersData = (await usersResponse.json()) as IUser[];

    dispatch(loadPostsActionCreator(constructData(postsData, usersData)));
    dispatch(loadingActionCreator({ loading: false }));
  } catch (error) {}
  dispatch(loadingActionCreator({ loading: false }));
};
