import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LawyerDto } from './dto/lawyer.dto';
import { LawyersModel } from './entity/lawyer.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(LawyersModel)
    private userRepository: Repository<LawyersModel>,
  ) {}
  async getLawyer(userName: string): Promise<LawyersModel> {
    return await this.userRepository.findOne({
      where: {
        name: userName,
      },
    });
  }
  async getAll(): Promise<LawyersModel[]> {
    return await this.userRepository.find();
  }

  async saveuser(query: LawyerDto): Promise<LawyersModel> {
    const newLawyer = new LawyersModel();
    newLawyer.name = query.name;
    newLawyer.createdAt = new Date();
    return await this.userRepository.save(newLawyer);
  }
}
