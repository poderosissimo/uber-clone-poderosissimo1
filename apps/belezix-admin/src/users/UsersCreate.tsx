import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { OwnerTitle } from "../owner/OwnerTitle";

export const UsersCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="address" multiline source="address" />
        <TextInput
          label="addressComplement"
          multiline
          source="addressComplement"
        />
        <div />
        <NumberInput
          step={1}
          label="appointmentsTotal"
          source="appointmentsTotal"
        />
        <TextInput label="cardId" source="cardId" />
        <BooleanInput label="cash" source="cash" />
        <BooleanInput label="cheque" source="cheque" />
        <TextInput label="city" source="city" />
        <ReferenceInput source="client.id" reference="Client" label="client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="cnpj" source="cnpj" />
        <TextInput label="complement" multiline source="complement" />
        <BooleanInput label="confirmedEmail" source="confirmedEmail" />
        <div />
        <TextInput label="cpf" source="cpf" />
        <TextInput label="createdById" source="createdById" />
        <BooleanInput label="creditcard" source="creditcard" />
        <BooleanInput label="debitcard" source="debitcard" />
        <NumberInput label="distance" source="distance" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="globalID" source="globalId" />
        <BooleanInput label="isActive" source="isActive" />
        <BooleanInput label="isCash" source="isCash" />
        <BooleanInput label="isCheque" source="isCheque" />
        <BooleanInput label="isConfirmedEmail" source="isConfirmedEmail" />
        <BooleanInput label="isCreditCard" source="isCreditCard" />
        <BooleanInput label="isDebitCard" source="isDebitCard" />
        <BooleanInput label="isPix" source="isPix" />
        <BooleanInput label="isSendedEmail" source="isSendedEmail" />
        <BooleanInput label="isTransferBank" source="isTransferBank" />
        <TextInput label="lastName" source="lastName" />
        <div />
        <TextInput label="myOwnerId" source="myOwnerId" />
        <TextInput label="name" source="name" />
        <TextInput label="nextPlan" source="nextPlan" />
        <ReferenceInput source="owner.id" reference="Owner" label="owner">
          <SelectInput optionText={OwnerTitle} />
        </ReferenceInput>
        <TextInput label="password" source="password" />
        <TextInput label="payDay" source="payDay" />
        <TextInput label="paymentDay" source="paymentDay" />
        <TextInput label="phone" source="phone" />
        <TextInput label="photoId" source="photoId" />
        <TextInput label="photoUrl" source="photoUrl" />
        <BooleanInput label="pix" source="pix" />
        <TextInput label="plan" source="plan" />
        <TextInput label="profilePhotoUrl" source="profilePhotoUrl" />
        <TextInput label="role" source="role" />
        <BooleanInput label="sendedEmail" source="sendedEmail" />
        <SelectArrayInput
          label="serviceIds"
          source="serviceIds"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <div />
        <NumberInput
          step={1}
          label="totalAppointments"
          source="totalAppointments"
        />
        <BooleanInput label="transferbank" source="transferbank" />
        <NumberInput label="travelDistance" source="travelDistance" />
        <TextInput label="uf" source="uf" />
        <TextInput label="userAddress" multiline source="userAddress" />
        <div />
        <TextInput label="userCardId" source="userCardId" />
        <TextInput label="userCity" source="userCity" />
        <TextInput label="userClientId" source="userClientId" />
        <TextInput label="userCnpj" source="userCnpj" />
        <TextInput label="userCpf" source="userCpf" />
        <TextInput label="userEmail" source="userEmail" type="email" />
        <TextInput label="userGlobalID" source="userGlobalId" />
        <TextInput label="userMyOwnerId" source="userMyOwnerId" />
        <TextInput label="userNextPlan" source="userNextPlan" />
        <TextInput label="userOwnerId" source="userOwnerId" />
        <TextInput label="userPassword" source="userPassword" />
        <TextInput label="userPhone" source="userPhone" />
        <TextInput label="userPhotoId" source="userPhotoId" />
        <TextInput label="userPlan" source="userPlan" />
        <TextInput label="userRole" source="userRole" />
        <div />
        <TextInput label="userUf" source="userUf" />
      </SimpleForm>
    </Create>
  );
};
