import axios, { AxiosResponse } from "axios";
import { IPost } from "../../interfaces/Post";
import { loadPostsActionCreator } from "../feature/postsSlice";
import { loadingActionCreator } from "../feature/uiSlice";
import { AppDispatch } from "../store/store";

export const getAllPostsThunk =
  (url: string) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator({ loading: true }));

    try {
      const { data: posts }: AxiosResponse<IPost[]> = await axios.get(url);

      dispatch(loadPostsActionCreator(posts));
    } catch (error) {}
  };
