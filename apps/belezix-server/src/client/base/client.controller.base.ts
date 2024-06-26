/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClientService } from "../client.service";
import { ClientCreateInput } from "./ClientCreateInput";
import { Client } from "./Client";
import { Request } from "../../request/base/Request";
import { ClientFindManyArgs } from "./ClientFindManyArgs";
import { ClientWhereUniqueInput } from "./ClientWhereUniqueInput";
import { ClientUpdateInput } from "./ClientUpdateInput";
import { UsersFindManyArgs } from "../../users/base/UsersFindManyArgs";
import { Users } from "../../users/base/Users";
import { UsersWhereUniqueInput } from "../../users/base/UsersWhereUniqueInput";

export class ClientControllerBase {
  constructor(protected readonly service: ClientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Client })
  async createClient(@common.Body() data: ClientCreateInput): Promise<Client> {
    return await this.service.createClient({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Client] })
  @ApiNestedQuery(ClientFindManyArgs)
  async clients(@common.Req() request: Request): Promise<Client[]> {
    const args = plainToClass(ClientFindManyArgs, request.query);
    return this.service.clients({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async client(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    const result = await this.service.client({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClient(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() data: ClientUpdateInput
  ): Promise<Client | null> {
    try {
      return await this.service.updateClient({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClient(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    try {
      return await this.service.deleteClient({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/usersItems")
  @ApiNestedQuery(UsersFindManyArgs)
  async findUsersItems(
    @common.Req() request: Request,
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Users[]> {
    const query = plainToClass(UsersFindManyArgs, request.query);
    const results = await this.service.findUsersItems(params.id, {
      ...query,
      select: {
        active: true,
        address: true,
        addressComplement: true,
        addresses: true,
        appointmentsTotal: true,
        cardId: true,
        cash: true,
        cheque: true,
        city: true,

        client: {
          select: {
            id: true,
          },
        },

        cnpj: true,
        complement: true,
        confirmedEmail: true,
        coord: true,
        cpf: true,
        createdAt: true,
        createdById: true,
        creditcard: true,
        debitcard: true,
        distance: true,
        email: true,
        firstName: true,
        globalId: true,
        id: true,
        isActive: true,
        isCash: true,
        isCheque: true,
        isConfirmedEmail: true,
        isCreditCard: true,
        isDebitCard: true,
        isPix: true,
        isSendedEmail: true,
        isTransferBank: true,
        lastName: true,
        locationCoord: true,
        myOwnerId: true,
        name: true,
        nextPlan: true,

        owner: {
          select: {
            id: true,
          },
        },

        password: true,
        payDay: true,
        paymentDay: true,
        phone: true,
        photoId: true,
        photoUrl: true,
        pix: true,
        plan: true,
        profilePhotoUrl: true,
        role: true,
        sendedEmail: true,
        serviceIds: true,
        serviceOptions: true,
        totalAppointments: true,
        transferbank: true,
        travelDistance: true,
        uf: true,
        updatedAt: true,
        userAddress: true,
        userAddresses: true,
        userCardId: true,
        userCity: true,
        userClientId: true,
        userCnpj: true,
        userCpf: true,
        userEmail: true,
        userGlobalId: true,
        userMyOwnerId: true,
        userNextPlan: true,
        userOwnerId: true,
        userPassword: true,
        userPhone: true,
        userPhotoId: true,
        userPlan: true,
        userRole: true,
        userServiceOptions: true,
        userUf: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/usersItems")
  async connectUsersItems(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: UsersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersItems: {
        connect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/usersItems")
  async updateUsersItems(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: UsersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersItems: {
        set: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/usersItems")
  async disconnectUsersItems(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: UsersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersItems: {
        disconnect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }
}
