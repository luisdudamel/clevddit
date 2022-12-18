import Loader from "../../components/Loader/Loader";
import { useAppSelector } from "../../redux/hooks";
import { getPostByIdThunk } from "../../redux/thunks/postsThunks";

const PostPage = (): JSX.Element => {
  const loading = useAppSelector((store) => store.ui.loading);

  return <>{loading && <Loader />}</>;
};

export default PostPage;
