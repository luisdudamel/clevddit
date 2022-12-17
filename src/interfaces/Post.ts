import { IUser } from "./Users";

export interface RawPost {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

export interface IPost extends RawPost {
  user: IUser;
}
