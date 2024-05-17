import { Users as TUsers } from "../api/users/Users";

export const USERS_TITLE_FIELD = "firstName";

export const UsersTitle = (record: TUsers): string => {
  return record.firstName?.toString() || String(record.id);
};
