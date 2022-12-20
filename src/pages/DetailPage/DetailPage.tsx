import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { IPost } from "../../interfaces/Post";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  editPostThunk,
  getPostByIdThunk,
} from "../../redux/thunks/postsThunks";
import "./DetailPage.scss";

const DetailPage = (): JSX.Element => {
  const loading = useAppSelector((store) => store.ui.loading);
  const dispatch = useAppDispatch();
  const { postId } = useParams();
  const currentPage = useLocation().pathname.search("/user/");

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
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<IPost>(initialPostDetail);

  useEffect(() => {
    (async () => {
      const detailToShow = await dispatch(getPostByIdThunk(postId as string));
      if (detailToShow) {
        setActualPost(detailToShow);
        setEditFormData(detailToShow);
      }
    })();
  }, [dispatch, postId]);

  const changeData = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEditFormData({ ...editFormData, [event.target.id]: event.target.value });
  };

  const handleEditSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setActualPost(editFormData);
    setIsEditMode(false);
    dispatch(editPostThunk(editFormData));
  };

  return (
    <>
      <main className="post-page">
        {loading && <Loader />}
        <div className="post-container">
          {!isEditMode && (
            <>
              <h1 className="post-page__title">{actualPost.title}</h1>
              <h2 className="post-page__author">
                By {actualPost.user?.username}
              </h2>
              <div className="post-page__body">
                <p className="post-page__body__text">{actualPost.body}</p>
                {currentPage === 0 ? null : (
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="post-page__body__button"
                    type="button"
                  >
                    <img
                      width={40}
                      height={40}
                      src="/img/icons/edit.svg"
                      alt="Edit Icon"
                    />
                  </button>
                )}
              </div>{" "}
            </>
          )}
          {isEditMode && (
            <>
              <h1 className="post-page__title--edit">
                <span className="post-page__title--edit__accent">Edit</span>{" "}
                {actualPost.title}
              </h1>

              <form
                onSubmit={handleEditSubmit}
                className="post-page__body--edit"
                action="submit"
              >
                <label className="edit-form__title--label" htmlFor="title">
                  Title
                </label>
                <textarea
                  className="edit-form__title"
                  name="title"
                  id="title"
                  onChange={changeData}
                  value={editFormData.title}
                />
                <label className="edit-form__body--label" htmlFor="body">
                  Post
                </label>
                <textarea
                  className="edit-form__body"
                  name="body"
                  id="body"
                  onChange={changeData}
                  value={editFormData.body}
                />
                <Button text="Edit" type="submit" disabled={false} />
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default DetailPage;
