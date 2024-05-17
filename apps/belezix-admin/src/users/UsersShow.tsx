import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { OWNER_TITLE_FIELD } from "../owner/OwnerTitle";

export const UsersShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <TextField label="address" source="address" />
        <TextField label="addressComplement" source="addressComplement" />
        <TextField label="addresses" source="addresses" />
        <TextField label="appointmentsTotal" source="appointmentsTotal" />
        <TextField label="cardId" source="cardId" />
        <BooleanField label="cash" source="cash" />
        <BooleanField label="cheque" source="cheque" />
        <TextField label="city" source="city" />
        <ReferenceField label="client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="cnpj" source="cnpj" />
        <TextField label="complement" source="complement" />
        <BooleanField label="confirmedEmail" source="confirmedEmail" />
        <TextField label="coord" source="coord" />
        <TextField label="cpf" source="cpf" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdById" source="createdById" />
        <BooleanField label="creditcard" source="creditcard" />
        <BooleanField label="debitcard" source="debitcard" />
        <TextField label="distance" source="distance" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="globalID" source="globalId" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <BooleanField label="isCash" source="isCash" />
        <BooleanField label="isCheque" source="isCheque" />
        <BooleanField label="isConfirmedEmail" source="isConfirmedEmail" />
        <BooleanField label="isCreditCard" source="isCreditCard" />
        <BooleanField label="isDebitCard" source="isDebitCard" />
        <BooleanField label="isPix" source="isPix" />
        <BooleanField label="isSendedEmail" source="isSendedEmail" />
        <BooleanField label="isTransferBank" source="isTransferBank" />
        <TextField label="lastName" source="lastName" />
        <TextField label="locationCoord" source="locationCoord" />
        <TextField label="myOwnerId" source="myOwnerId" />
        <TextField label="name" source="name" />
        <TextField label="nextPlan" source="nextPlan" />
        <ReferenceField label="owner" source="owner.id" reference="Owner">
          <TextField source={OWNER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="password" source="password" />
        <TextField label="payDay" source="payDay" />
        <TextField label="paymentDay" source="paymentDay" />
        <TextField label="phone" source="phone" />
        <TextField label="photoId" source="photoId" />
        <TextField label="photoUrl" source="photoUrl" />
        <BooleanField label="pix" source="pix" />
        <TextField label="plan" source="plan" />
        <TextField label="profilePhotoUrl" source="profilePhotoUrl" />
        <TextField label="role" source="role" />
        <BooleanField label="sendedEmail" source="sendedEmail" />
        <TextField label="serviceIds" source="serviceIds" />
        <TextField label="serviceOptions" source="serviceOptions" />
        <TextField label="totalAppointments" source="totalAppointments" />
        <BooleanField label="transferbank" source="transferbank" />
        <TextField label="travelDistance" source="travelDistance" />
        <TextField label="uf" source="uf" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userAddress" source="userAddress" />
        <TextField label="userAddresses" source="userAddresses" />
        <TextField label="userCardId" source="userCardId" />
        <TextField label="userCity" source="userCity" />
        <TextField label="userClientId" source="userClientId" />
        <TextField label="userCnpj" source="userCnpj" />
        <TextField label="userCpf" source="userCpf" />
        <TextField label="userEmail" source="userEmail" />
        <TextField label="userGlobalID" source="userGlobalId" />
        <TextField label="userMyOwnerId" source="userMyOwnerId" />
        <TextField label="userNextPlan" source="userNextPlan" />
        <TextField label="userOwnerId" source="userOwnerId" />
        <TextField label="userPassword" source="userPassword" />
        <TextField label="userPhone" source="userPhone" />
        <TextField label="userPhotoId" source="userPhotoId" />
        <TextField label="userPlan" source="userPlan" />
        <TextField label="userRole" source="userRole" />
        <TextField label="userServiceOptions" source="userServiceOptions" />
        <TextField label="userUf" source="userUf" />
      </SimpleShowLayout>
    </Show>
  );
};
