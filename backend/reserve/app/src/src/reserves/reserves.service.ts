import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ReservesModel } from "./models/reserves.model";

@Injectable()
export class ReservesService {
  constructor(
    @InjectModel("Reserves") private readonly model: Model<ReservesModel>
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
    const { idResources, idUser, idSubject, timeStart, timeClose } = model;
    if (idResources) {
      cultureUpdate.idResources = idResources;
    }
    if (idUser) {
      cultureUpdate.idUser = idUser;
    }
    if (idSubject) {
      cultureUpdate.irrigacao = idSubject;
    }
    if (timeStart) {
      cultureUpdate.irrigacao = timeStart;
    }
    if (timeClose) {
      cultureUpdate.irrigacao = timeClose;
    }

    return await cultureUpdate.save();
  }
}
