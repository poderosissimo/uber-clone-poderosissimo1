import { Users } from "../users/Users";

export type Client = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  usersItems?: Array<Users>;
};
