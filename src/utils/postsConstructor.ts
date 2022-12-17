import { IPost, RawPost } from "../interfaces/Post";
import { IUser } from "../interfaces/Users";

export const constructData = (
  postsList: RawPost[],
  usersList: IUser[]
): IPost[] => {
  const data = postsList.map((post) => {
    const currentUser = usersList.find((user) => user.id === post.userId);
    const { body, id, title } = post;
    return {
      body,
      id,
      title,
      user: currentUser,
    };
  });

  return data;
};
