import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  active: "true",
  address: "exampleAddress",
  addressComplement: "exampleAddressComplement",
  appointmentsTotal: 42,
  cardId: "exampleCardId",
  cash: "true",
  cheque: "true",
  city: "exampleCity",
  cnpj: "exampleCnpj",
  complement: "exampleComplement",
  confirmedEmail: "true",
  cpf: "exampleCpf",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  creditcard: "true",
  debitcard: "true",
  distance: 42.42,
  email: "exampleEmail",
  firstName: "exampleFirstName",
  globalId: "exampleGlobalId",
  id: "exampleId",
  isActive: "true",
  isCash: "true",
  isCheque: "true",
  isConfirmedEmail: "true",
  isCreditCard: "true",
  isDebitCard: "true",
  isPix: "true",
  isSendedEmail: "true",
  isTransferBank: "true",
  lastName: "exampleLastName",
  myOwnerId: "exampleMyOwnerId",
  name: "exampleName",
  nextPlan: "exampleNextPlan",
  password: "examplePassword",
  payDay: "examplePayDay",
  paymentDay: "examplePaymentDay",
  phone: "examplePhone",
  photoId: "examplePhotoId",
  photoUrl: "examplePhotoUrl",
  pix: "true",
  plan: "examplePlan",
  profilePhotoUrl: "exampleProfilePhotoUrl",
  role: "exampleRole",
  sendedEmail: "true",
  totalAppointments: 42,
  transferbank: "true",
  travelDistance: 42.42,
  uf: "exampleUf",
  updatedAt: new Date(),
  userAddress: "exampleUserAddress",
  userCardId: "exampleUserCardId",
  userCity: "exampleUserCity",
  userClientId: "exampleUserClientId",
  userCnpj: "exampleUserCnpj",
  userCpf: "exampleUserCpf",
  userEmail: "exampleUserEmail",
  userGlobalId: "exampleUserGlobalId",
  userMyOwnerId: "exampleUserMyOwnerId",
  userNextPlan: "exampleUserNextPlan",
  userOwnerId: "exampleUserOwnerId",
  userPassword: "exampleUserPassword",
  userPhone: "exampleUserPhone",
  userPhotoId: "exampleUserPhotoId",
  userPlan: "exampleUserPlan",
  userRole: "exampleUserRole",
  userUf: "exampleUserUf",
};
const CREATE_RESULT = {
  active: "true",
  address: "exampleAddress",
  addressComplement: "exampleAddressComplement",
  appointmentsTotal: 42,
  cardId: "exampleCardId",
  cash: "true",
  cheque: "true",
  city: "exampleCity",
  cnpj: "exampleCnpj",
  complement: "exampleComplement",
  confirmedEmail: "true",
  cpf: "exampleCpf",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  creditcard: "true",
  debitcard: "true",
  distance: 42.42,
  email: "exampleEmail",
  firstName: "exampleFirstName",
  globalId: "exampleGlobalId",
  id: "exampleId",
  isActive: "true",
  isCash: "true",
  isCheque: "true",
  isConfirmedEmail: "true",
  isCreditCard: "true",
  isDebitCard: "true",
  isPix: "true",
  isSendedEmail: "true",
  isTransferBank: "true",
  lastName: "exampleLastName",
  myOwnerId: "exampleMyOwnerId",
  name: "exampleName",
  nextPlan: "exampleNextPlan",
  password: "examplePassword",
  payDay: "examplePayDay",
  paymentDay: "examplePaymentDay",
  phone: "examplePhone",
  photoId: "examplePhotoId",
  photoUrl: "examplePhotoUrl",
  pix: "true",
  plan: "examplePlan",
  profilePhotoUrl: "exampleProfilePhotoUrl",
  role: "exampleRole",
  sendedEmail: "true",
  totalAppointments: 42,
  transferbank: "true",
  travelDistance: 42.42,
  uf: "exampleUf",
  updatedAt: new Date(),
  userAddress: "exampleUserAddress",
  userCardId: "exampleUserCardId",
  userCity: "exampleUserCity",
  userClientId: "exampleUserClientId",
  userCnpj: "exampleUserCnpj",
  userCpf: "exampleUserCpf",
  userEmail: "exampleUserEmail",
  userGlobalId: "exampleUserGlobalId",
  userMyOwnerId: "exampleUserMyOwnerId",
  userNextPlan: "exampleUserNextPlan",
  userOwnerId: "exampleUserOwnerId",
  userPassword: "exampleUserPassword",
  userPhone: "exampleUserPhone",
  userPhotoId: "exampleUserPhotoId",
  userPlan: "exampleUserPlan",
  userRole: "exampleUserRole",
  userUf: "exampleUserUf",
};
const FIND_MANY_RESULT = [
  {
    active: "true",
    address: "exampleAddress",
    addressComplement: "exampleAddressComplement",
    appointmentsTotal: 42,
    cardId: "exampleCardId",
    cash: "true",
    cheque: "true",
    city: "exampleCity",
    cnpj: "exampleCnpj",
    complement: "exampleComplement",
    confirmedEmail: "true",
    cpf: "exampleCpf",
    createdAt: new Date(),
    createdById: "exampleCreatedById",
    creditcard: "true",
    debitcard: "true",
    distance: 42.42,
    email: "exampleEmail",
    firstName: "exampleFirstName",
    globalId: "exampleGlobalId",
    id: "exampleId",
    isActive: "true",
    isCash: "true",
    isCheque: "true",
    isConfirmedEmail: "true",
    isCreditCard: "true",
    isDebitCard: "true",
    isPix: "true",
    isSendedEmail: "true",
    isTransferBank: "true",
    lastName: "exampleLastName",
    myOwnerId: "exampleMyOwnerId",
    name: "exampleName",
    nextPlan: "exampleNextPlan",
    password: "examplePassword",
    payDay: "examplePayDay",
    paymentDay: "examplePaymentDay",
    phone: "examplePhone",
    photoId: "examplePhotoId",
    photoUrl: "examplePhotoUrl",
    pix: "true",
    plan: "examplePlan",
    profilePhotoUrl: "exampleProfilePhotoUrl",
    role: "exampleRole",
    sendedEmail: "true",
    totalAppointments: 42,
    transferbank: "true",
    travelDistance: 42.42,
    uf: "exampleUf",
    updatedAt: new Date(),
    userAddress: "exampleUserAddress",
    userCardId: "exampleUserCardId",
    userCity: "exampleUserCity",
    userClientId: "exampleUserClientId",
    userCnpj: "exampleUserCnpj",
    userCpf: "exampleUserCpf",
    userEmail: "exampleUserEmail",
    userGlobalId: "exampleUserGlobalId",
    userMyOwnerId: "exampleUserMyOwnerId",
    userNextPlan: "exampleUserNextPlan",
    userOwnerId: "exampleUserOwnerId",
    userPassword: "exampleUserPassword",
    userPhone: "exampleUserPhone",
    userPhotoId: "exampleUserPhotoId",
    userPlan: "exampleUserPlan",
    userRole: "exampleUserRole",
    userUf: "exampleUserUf",
  },
];
const FIND_ONE_RESULT = {
  active: "true",
  address: "exampleAddress",
  addressComplement: "exampleAddressComplement",
  appointmentsTotal: 42,
  cardId: "exampleCardId",
  cash: "true",
  cheque: "true",
  city: "exampleCity",
  cnpj: "exampleCnpj",
  complement: "exampleComplement",
  confirmedEmail: "true",
  cpf: "exampleCpf",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  creditcard: "true",
  debitcard: "true",
  distance: 42.42,
  email: "exampleEmail",
  firstName: "exampleFirstName",
  globalId: "exampleGlobalId",
  id: "exampleId",
  isActive: "true",
  isCash: "true",
  isCheque: "true",
  isConfirmedEmail: "true",
  isCreditCard: "true",
  isDebitCard: "true",
  isPix: "true",
  isSendedEmail: "true",
  isTransferBank: "true",
  lastName: "exampleLastName",
  myOwnerId: "exampleMyOwnerId",
  name: "exampleName",
  nextPlan: "exampleNextPlan",
  password: "examplePassword",
  payDay: "examplePayDay",
  paymentDay: "examplePaymentDay",
  phone: "examplePhone",
  photoId: "examplePhotoId",
  photoUrl: "examplePhotoUrl",
  pix: "true",
  plan: "examplePlan",
  profilePhotoUrl: "exampleProfilePhotoUrl",
  role: "exampleRole",
  sendedEmail: "true",
  totalAppointments: 42,
  transferbank: "true",
  travelDistance: 42.42,
  uf: "exampleUf",
  updatedAt: new Date(),
  userAddress: "exampleUserAddress",
  userCardId: "exampleUserCardId",
  userCity: "exampleUserCity",
  userClientId: "exampleUserClientId",
  userCnpj: "exampleUserCnpj",
  userCpf: "exampleUserCpf",
  userEmail: "exampleUserEmail",
  userGlobalId: "exampleUserGlobalId",
  userMyOwnerId: "exampleUserMyOwnerId",
  userNextPlan: "exampleUserNextPlan",
  userOwnerId: "exampleUserOwnerId",
  userPassword: "exampleUserPassword",
  userPhone: "exampleUserPhone",
  userPhotoId: "exampleUserPhotoId",
  userPlan: "exampleUserPlan",
  userRole: "exampleUserRole",
  userUf: "exampleUserUf",
};

const service = {
  createUsers() {
    return CREATE_RESULT;
  },
  usersItems: () => FIND_MANY_RESULT,
  users: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Users", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UsersService,
          useValue: service,
        },
      ],
      controllers: [UsersController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /users", async () => {
    await request(app.getHttpServer())
      .get("/users")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /users/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /users/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /users existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/users")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
