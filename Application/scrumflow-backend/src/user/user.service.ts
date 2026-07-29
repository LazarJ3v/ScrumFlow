import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.UserUncheckedCreateInput) {
        return this.prisma.user.create({ data });
    }

    async findAll(params: {
        skip?: number,
        take?: number,
        cursor?: Prisma.UserWhereUniqueInput,
        where?: Prisma.UserWhereInput,
        orderBy?: Prisma.UserOrderByWithRelationInput
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({ skip, take, cursor, where, orderBy });
    }

    async findOne(query: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.findUnique({ where: query });
    }

    async update(params:{data: Prisma.UserUncheckedUpdateInput, where: Prisma.UserWhereUniqueInput}){
        const {data, where} = params;
        return this.prisma.user.update({data, where});
    }

    async remove(query: Prisma.UserWhereUniqueInput){
        return this.prisma.user.delete({where: query})
    }
}
