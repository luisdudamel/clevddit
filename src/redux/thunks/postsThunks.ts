import { IPost, RawPost } from "../../interfaces/Post";
import { IUser } from "../../interfaces/Users";
import { constructData } from "../../utils/postsConstructor";
import {
  deletePostActionCreator,
  loadPostsActionCreator,
} from "../feature/postsSlice";
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

export const deletePostThunk =
  (postId: number) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator({ loading: true }));

    try {
      const deletePostResponse = await fetch(`${url}posts/${postId}`, {
        method: "DELETE",
      });

      if (deletePostResponse.ok) {
        dispatch(deletePostActionCreator(postId));
      }

      dispatch(loadingActionCreator({ loading: false }));
    } catch (error) {}
    dispatch(loadingActionCreator({ loading: false }));
  };

export const getPostByIdThunk =
  (postToGet: string) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator({ loading: true }));

    try {
      const postResponse = await fetch(`${url}posts/${postToGet}`);
      const postData = (await postResponse.json()) as RawPost;

      const userResponse = await fetch(`${url}users/${postData.userId}`);
      const userData = (await userResponse.json()) as IUser;

      dispatch(loadingActionCreator({ loading: false }));

      return constructData([postData], [userData]);
    } catch (error) {}
    dispatch(loadingActionCreator({ loading: false }));
  };
