import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { LawyerDto } from './dto/lawyer.dto';
import { LawyersModel } from './entity/lawyer.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getLawyer/:userName')
  async getLawyer(@Param('userName') userName: string): Promise<LawyersModel> {
    return await this.appService.getLawyer(userName);
  }
  @Post('create')
  async createUser(@Body() query: LawyerDto) {
    return await this.appService.saveuser(query);
  }

  @Get('getAll')
  async getAll(): Promise<LawyersModel[]> {
    return await this.appService.getAll();
  }
}
