import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="createdById" source="createdById" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
