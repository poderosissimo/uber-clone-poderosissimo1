import { Users } from "../users/Users";

export type Owner = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  usersItems?: Array<Users>;
};
