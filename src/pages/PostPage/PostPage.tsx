import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { IPost } from "../../interfaces/Post";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPostByIdThunk } from "../../redux/thunks/postsThunks";

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
  const [actualPost, setActualPost] = useState(initialPostDetail);

  useEffect(() => {
    (async () => {
      const postToShow = await dispatch(getPostByIdThunk(postId as string));
      console.log(postToShow);
    })();
  }, [dispatch, postId]);

  return (
    <>
      <main>{loading && <Loader />}</main>
    </>
  );
};

export default PostPage;
