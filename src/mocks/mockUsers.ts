import { IUser } from "../interfaces/Users";

export const mockLoadedUsers: IUser[] = [
  {
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
  {
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
];
