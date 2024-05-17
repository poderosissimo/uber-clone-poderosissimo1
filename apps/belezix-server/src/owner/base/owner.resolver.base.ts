/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Owner } from "./Owner";
import { OwnerCountArgs } from "./OwnerCountArgs";
import { OwnerFindManyArgs } from "./OwnerFindManyArgs";
import { OwnerFindUniqueArgs } from "./OwnerFindUniqueArgs";
import { CreateOwnerArgs } from "./CreateOwnerArgs";
import { UpdateOwnerArgs } from "./UpdateOwnerArgs";
import { DeleteOwnerArgs } from "./DeleteOwnerArgs";
import { UsersFindManyArgs } from "../../users/base/UsersFindManyArgs";
import { Users } from "../../users/base/Users";
import { OwnerService } from "../owner.service";
@graphql.Resolver(() => Owner)
export class OwnerResolverBase {
  constructor(protected readonly service: OwnerService) {}

  async _ownersMeta(
    @graphql.Args() args: OwnerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Owner])
  async owners(@graphql.Args() args: OwnerFindManyArgs): Promise<Owner[]> {
    return this.service.owners(args);
  }

  @graphql.Query(() => Owner, { nullable: true })
  async owner(
    @graphql.Args() args: OwnerFindUniqueArgs
  ): Promise<Owner | null> {
    const result = await this.service.owner(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Owner)
  async createOwner(@graphql.Args() args: CreateOwnerArgs): Promise<Owner> {
    return await this.service.createOwner({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Owner)
  async updateOwner(
    @graphql.Args() args: UpdateOwnerArgs
  ): Promise<Owner | null> {
    try {
      return await this.service.updateOwner({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Owner)
  async deleteOwner(
    @graphql.Args() args: DeleteOwnerArgs
  ): Promise<Owner | null> {
    try {
      return await this.service.deleteOwner(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Users], { name: "usersItems" })
  async findUsersItems(
    @graphql.Parent() parent: Owner,
    @graphql.Args() args: UsersFindManyArgs
  ): Promise<Users[]> {
    const results = await this.service.findUsersItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}