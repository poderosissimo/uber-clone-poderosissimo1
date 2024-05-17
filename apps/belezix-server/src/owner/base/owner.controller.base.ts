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
import { OwnerService } from "../owner.service";
import { OwnerCreateInput } from "./OwnerCreateInput";
import { Owner } from "./Owner";
import { Request } from "../../request/base/Request";
import { OwnerFindManyArgs } from "./OwnerFindManyArgs";
import { OwnerWhereUniqueInput } from "./OwnerWhereUniqueInput";
import { OwnerUpdateInput } from "./OwnerUpdateInput";
import { UsersFindManyArgs } from "../../users/base/UsersFindManyArgs";
import { Users } from "../../users/base/Users";
import { UsersWhereUniqueInput } from "../../users/base/UsersWhereUniqueInput";

export class OwnerControllerBase {
  constructor(protected readonly service: OwnerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Owner })
  async createOwner(@common.Body() data: OwnerCreateInput): Promise<Owner> {
    return await this.service.createOwner({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Owner] })
  @ApiNestedQuery(OwnerFindManyArgs)
  async owners(@common.Req() request: Request): Promise<Owner[]> {
    const args = plainToClass(OwnerFindManyArgs, request.query);
    return this.service.owners({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Owner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async owner(
    @common.Param() params: OwnerWhereUniqueInput
  ): Promise<Owner | null> {
    const result = await this.service.owner({
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
  @swagger.ApiOkResponse({ type: Owner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOwner(
    @common.Param() params: OwnerWhereUniqueInput,
    @common.Body() data: OwnerUpdateInput
  ): Promise<Owner | null> {
    try {
      return await this.service.updateOwner({
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
  @swagger.ApiOkResponse({ type: Owner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOwner(
    @common.Param() params: OwnerWhereUniqueInput
  ): Promise<Owner | null> {
    try {
      return await this.service.deleteOwner({
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
    @common.Param() params: OwnerWhereUniqueInput
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
    @common.Param() params: OwnerWhereUniqueInput,
    @common.Body() body: UsersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersItems: {
        connect: body,
      },
    };
    await this.service.updateOwner({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/usersItems")
  async updateUsersItems(
    @common.Param() params: OwnerWhereUniqueInput,
    @common.Body() body: UsersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersItems: {
        set: body,
      },
    };
    await this.service.updateOwner({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/usersItems")
  async disconnectUsersItems(
    @common.Param() params: OwnerWhereUniqueInput,
    @common.Body() body: UsersWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersItems: {
        disconnect: body,
      },
    };
    await this.service.updateOwner({
      where: params,
      data,
      select: { id: true },
    });
  }
}