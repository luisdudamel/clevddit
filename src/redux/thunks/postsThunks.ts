import axios, { AxiosResponse } from "axios";
import { IPost } from "../../interfaces/Post";
import { loadPostsActionCreator } from "../feature/postsSlice";
import { loadingActionCreator } from "../feature/uiSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL as string;

export const getAllPostsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator({ loading: true }));

  try {
    const { data: posts }: AxiosResponse<IPost[]> = await axios.get(url);

    dispatch(loadPostsActionCreator(posts));
  } catch (error) {}
};
