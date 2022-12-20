import { IPost, RawPost } from "../../interfaces/Post";
import { IUser } from "../../interfaces/Users";
import { constructData } from "../../utils/postsConstructor";
import {
  deletePostActionCreator,
  loadPostsActionCreator,
} from "../feature/postSlice/postsSlice";
import {
  loadingActionCreator,
  userFeedbackActionCreator,
} from "../feature/uiSlice/uiSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL as string;

export const getAllPostsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator(true));

  try {
    const postsResponse: Response = await fetch(`${url}posts`);
    const postsData: RawPost[] = await postsResponse.json();
    const usersResponse: Response = await fetch(`${url}users`);
    const usersData: IUser[] = await usersResponse.json();

    dispatch(loadPostsActionCreator(constructData(postsData, usersData)));
    dispatch(loadingActionCreator(false));
  } catch (error) {}
  dispatch(loadingActionCreator(false));
};

export const deletePostThunk =
  (postId: number) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator(true));

    try {
      const deletePostResponse: Response = await fetch(
        `${url}posts/${postId}`,
        {
          method: "DELETE",
        }
      );

      if (deletePostResponse.status === 200) {
        dispatch(loadingActionCreator(false));
        dispatch(deletePostActionCreator(postId));
        dispatch(
          userFeedbackActionCreator({
            feedbackMessage: "Post succesfully deleted",
            userFeedbackOpen: true,
          })
        );
        dispatch(loadPostsActionCreator(true));
        await setTimeout(() => {
          dispatch(
            userFeedbackActionCreator({
              feedbackMessage: "",
              userFeedbackOpen: false,
            })
          );
        }, 1000);
      }
    } catch (error) {
      dispatch(loadingActionCreator(false));
    }
  };

export const getPostByIdThunk =
  (postToGet: string) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator(true));

    try {
      const postResponse: Response = await fetch(`${url}posts/${postToGet}`);
      const postData: RawPost = await postResponse.json();

      const userResponse: Response = await fetch(
        `${url}users/${postData.userId}`
      );
      const userData: IUser = await userResponse.json();

      dispatch(loadingActionCreator(false));
      return constructData([postData], [userData])[0];
    } catch (error) {}
    dispatch(loadingActionCreator(false));
    return null;
  };

export const editPostThunk =
  (editedPost: IPost) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator(true));

    try {
      const editResponse = await fetch(`${url}posts/${editedPost.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ ...editedPost }),
      });
      if (editResponse.ok) {
        dispatch(loadingActionCreator(false));
        dispatch(
          userFeedbackActionCreator({
            feedbackMessage: "Post succesfully edited",
            userFeedbackOpen: true,
          })
        );

        await setTimeout(() => {
          dispatch(
            userFeedbackActionCreator({
              feedbackMessage: "",
              userFeedbackOpen: false,
            })
          );
        }, 1000);
      }
    } catch (error) {
      dispatch(loadingActionCreator(false));
    }
  };
