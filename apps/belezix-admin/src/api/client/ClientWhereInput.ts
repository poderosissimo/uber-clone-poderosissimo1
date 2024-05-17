import { StringFilter } from "../../util/StringFilter";
import { UsersListRelationFilter } from "../users/UsersListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  usersItems?: UsersListRelationFilter;
};
