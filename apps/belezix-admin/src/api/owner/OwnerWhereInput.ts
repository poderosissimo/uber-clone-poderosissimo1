import { StringFilter } from "../../util/StringFilter";
import { UsersListRelationFilter } from "../users/UsersListRelationFilter";

export type OwnerWhereInput = {
  id?: StringFilter;
  usersItems?: UsersListRelationFilter;
};
