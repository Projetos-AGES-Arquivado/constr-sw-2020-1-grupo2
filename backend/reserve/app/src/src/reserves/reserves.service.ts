import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReservesModel } from './models/reserves.model';

@Injectable()
export class ReservesService {
  constructor(
    @InjectModel('Reserves') private readonly model: Model<ReservesModel>,
  ) {}

  async create(model: ReservesModel): Promise<ReservesModel> {
    const data = new this.model(model);
    return await data.save();
  }

  async findAll(): Promise<ReservesModel[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<ReservesModel> {
    return await this.model.findOne({ _id: id }).exec();
  }

  async delete(id: string): Promise<ReservesModel> {
    return await this.model.findByIdAndRemove({ _id: id }).exec();
  }

  async update(id: string, model: ReservesModel): Promise<ReservesModel> {
    const cultureUpdate = await this.model.findOne({ _id: id }).exec();
    // const { nome, coordenadas, irrigacao } = model;
    // if (nome) {
    //   cultureUpdate.nome = nome;
    // }
    // if (coordenadas) {
    //   cultureUpdate.coordenadas = coordenadas;
    // }
    // if (irrigacao) {
    //   cultureUpdate.irrigacao = irrigacao;
    // }

    return await cultureUpdate.save();
  }
}
