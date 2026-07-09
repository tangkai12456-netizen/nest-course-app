import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma.service';
import { User } from '../generated/prisma/client'; // 
import { CreateUserDto } from '../generated/nestjs-dto/user/dto/create-user.dto';
import { UpdateUserDto } from '../generated/nestjs-dto/user/dto/update-user.dto';
export class AuthController {
    constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<User> {
    return this.prismaService.User.create({
      data: userData,
    });
  }

 @Get()
 async findAll(): Promise<User[]> {
    return this.prismaService.User.findMany();
  } 
}




