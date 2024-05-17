import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="createdById" source="createdById" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
