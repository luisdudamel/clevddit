import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { IPost } from "../../interfaces/Post";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPostByIdThunk } from "../../redux/thunks/postsThunks";
import "./PostPage.scss";

const PostPage = (): JSX.Element => {
  const loading = useAppSelector((store) => store.ui.loading);
  const dispatch = useAppDispatch();
  const { postId } = useParams();
  const initialPostDetail: IPost = {
    body: "",
    id: 0,
    title: "",
    user: {
      address: {
        city: "",
        geo: { lat: "", lng: "" },
        street: "",
        suite: "",
        zipcode: "",
      },
      company: { bs: "", catchPhrase: "", name: "" },
      email: "",
      id: 2,
      name: "",
      phone: "",
      username: "",
      website: "",
    },
  };
  const [actualPost, setActualPost] = useState<IPost>(initialPostDetail);

  useEffect(() => {
    (async () => {
      const postToShow = await dispatch(getPostByIdThunk(postId as string));
      if (postToShow) {
        setActualPost(postToShow);
      }
    })();
  }, [dispatch, postId]);

  return (
    <>
      <main className="post-page">
        {loading && <Loader />}
        <div className="post-container">
          {loading && (
            <>
              <h1 className="post-page__title">{actualPost.title}</h1>
              <h2 className="post-page__author">
                By {actualPost.user?.username}
              </h2>
              <div className="post-page__body">
                <p>{actualPost.body}</p>
                <img
                  width={40}
                  height={40}
                  src="/img/icons/edit.svg"
                  alt="Edit Icon"
                />
              </div>{" "}
            </>
          )}
          {!loading && (
            <>
              <h1 className="post-page__title--edit">
                <span className="post-page__title--edit__accent">Edit</span>{" "}
                {actualPost.title}
              </h1>
              <div className="post-page__body--edit">
                <label className="edit-form__title--label" htmlFor="post-title">
                  Title
                </label>
                <textarea
                  className="edit-form__title"
                  name="post-title"
                  id="post-title"
                  value={actualPost.title}
                />
                <label className="edit-form__body--label" htmlFor="post-body">
                  Post
                </label>
                <textarea
                  className="edit-form__body"
                  name="post-body"
                  id="post-body"
                  value={actualPost.body}
                />
              </div>{" "}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default PostPage;
