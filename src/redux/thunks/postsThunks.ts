import { RawPost } from "../../interfaces/Post";
import { loadPostsActionCreator } from "../feature/postsSlice";
import { loadingActionCreator } from "../feature/uiSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL as string;

export const getAllPostsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator({ loading: true }));

  try {
    const response = await fetch(`${url}posts`);
    const data = (await response.json()) as RawPost[];

    dispatch(loadPostsActionCreator(data));
    dispatch(loadingActionCreator({ loading: false }));
  } catch (error) {}
  dispatch(loadingActionCreator({ loading: false }));
};
