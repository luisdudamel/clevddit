import { IPost, RawPost } from "../interfaces/Post";

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

export const mockConstructedPosts: IPost[] = [
  {
    body: "Chat gpt is capable of doing code, wow",
    id: 1,
    title: "ChatGPT is killing it",
    user: {
      id: 1,
      name: "Elon Musk",
      username: "Elon",
      email: "elon@tesla.com",
      address: {
        street: "Tesla road",
        suite: "234",
        city: "Bocachica",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "tesla.com",
      company: {
        name: "Space X",
        catchPhrase: "Space tourism",
        bs: "making money",
      },
    },
  },
  {
    body: "Nobody uses copilot anymore :O",
    id: 2,
    title: "Copilot is dying",
    user: {
      id: 2,
      name: "Steve Wozniak",
      username: "woz",
      email: "woz@not-apple.com",
      address: {
        street: "Despair street",
        suite: "1987",
        city: "Palo Alto",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "pear.com",
      company: {
        name: "Pear",
        catchPhrase: "We are a better fruit",
        bs: "I almost did it",
      },
    },
  },
];
