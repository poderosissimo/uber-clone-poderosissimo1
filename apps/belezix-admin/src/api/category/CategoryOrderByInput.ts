import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
