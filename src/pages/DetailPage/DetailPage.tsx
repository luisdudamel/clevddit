import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Feedback from "../../components/Feedback/Feedback";
import { IPost } from "../../interfaces/Post";
import { IUser } from "../../interfaces/Users";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  editPostThunk,
  getPostByIdThunk,
} from "../../redux/thunks/postsThunks";
import { getUserByIdThunk } from "../../redux/thunks/usersThunks";
import "./DetailPage.scss";

const DetailPage = (): JSX.Element => {
  const loading = useAppSelector((store) => store.ui.loading);
  const dispatch = useAppDispatch();
  const { postId } = useParams();
  const { userId } = useParams();

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
  const initialUserDetail: IUser = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const [actualPost, setActualPost] = useState<IPost>(initialPostDetail);
  const [actualUser, setActualUser] = useState<IUser>(initialUserDetail);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<IPost>(initialPostDetail);

  useEffect(() => {
    (async () => {
      if (postId) {
        const postToShow = await dispatch(getPostByIdThunk(postId));
        if (postToShow) {
          setActualPost(postToShow);
          setEditFormData(postToShow);
        }
        return;
      }
      if (userId) {
        const userToShow = await dispatch(getUserByIdThunk(userId));
        if (userToShow) {
          setActualUser(userToShow);
        }
      }
    })();
  }, [dispatch, postId, userId]);

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
      <main className="detail-page">
        {loading && <Feedback />}
        <div className="detail-container">
          {!isEditMode && (
            <>
              <h1 className="detail-page__title">
                {postId ? actualPost.title : actualUser.username}
              </h1>
              <h2 className="detail-page__author">
                {postId ? (
                  <> By {actualPost.user?.username}</>
                ) : (
                  actualUser.name
                )}
              </h2>
              <div className="detail-page__body">
                <div className="detail-page__body__text">
                  {postId ? (
                    actualPost.body
                  ) : (
                    <>
                      <h3>{actualUser.email}</h3>
                      <p>
                        {" "}
                        <span className="detail-page--item">Website: </span>
                        {actualUser.website}
                      </p>
                      <p>
                        {" "}
                        <span className="detail-page--item">Phone: </span>
                        {actualUser.phone}
                      </p>
                      <p>
                        {" "}
                        <span className="detail-page--item">City: </span>
                        {actualUser.address.city}
                      </p>
                      <p>
                        {" "}
                        <span className="detail-page--item">Street: </span>
                        {actualUser.address.street}
                      </p>
                      <p>
                        {" "}
                        <span className="detail-page--item">Suite: </span>{" "}
                        {actualUser.address.suite}
                      </p>
                      <p>
                        {" "}
                        <span className="detail-page--item">Zip: </span>
                        {actualUser.address.zipcode}
                      </p>
                      <p>
                        {" "}
                        <span className="detail-page--item">Company: </span>
                        {actualUser.company.name}
                      </p>
                      <p>
                        {" "}
                        <span className="detail-page--item">
                          Company Phrase:{" "}
                        </span>{" "}
                        {actualUser.company.catchPhrase}
                      </p>
                      <p>
                        {" "}
                        <span className="detail-page--item">Segment: </span>
                        {actualUser.company.bs}
                      </p>
                    </>
                  )}
                </div>

                {postId && (
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="detail-page__body__button"
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
              <h1 className="detail-page__title--edit">
                <span className="post-page__title--edit__accent">Edit</span>{" "}
                {actualPost.title}
              </h1>

              <form
                onSubmit={handleEditSubmit}
                className="detail-page__body--edit"
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
