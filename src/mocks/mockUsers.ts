import { IUser, UserState } from "../interfaces/Users";

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

export const mockUnloggedUser: UserState = {
  logged: false,
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
export const mockLoggedUser: UserState = {
  logged: true,
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

export const mockUnloggedAdmin: UserState = {
  logged: false,
  id: 0,
  name: "God",
  username: "admin",
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
export const mockLoggedAdmin: UserState = {
  logged: true,
  id: 0,
  name: "God",
  username: "admin",
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

export const mockParzivalUser: IUser = {
  id: 0,
  name: "Wade Watts",
  username: "Parzival",
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
