import { RawPost } from "../interfaces/Post";

export const mockPosts: RawPost[] = [
  {
    userId: 1,
    body: "This is a mock post",
    id: 1,
    title: "Mock post title 1",
  },
  {
    userId: 2,
    body: "This is a mock post",
    id: 2,
    title: "Mock post title 1",
  },
  {
    userId: 3,
    body: "This is a mock post",
    id: 3,
    title: "Mock post title 1",
  },
];

export const mockPost: RawPost = {
  body: "Chat gpt is capable of doing code, wow",
  id: 2,
  title: "ChatGPT is killing it",
  userId: 2,
};
export const mockTwoPosts: RawPost[] = [
  {
    body: "Chat gpt is capable of doing code, wow",
    id: 1,
    title: "ChatGPT is killing it",
    userId: 1,
  },
  {
    body: "Nobody uses copilot anymore :O",
    id: 2,
    title: "Copilot is dying",
    userId: 2,
  },
];
