import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  active?: BooleanNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
