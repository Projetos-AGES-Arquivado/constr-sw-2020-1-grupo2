import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ReservesModel } from "./models/reserves.model";

@Injectable()
export class ReservesService {
  constructor(
    @InjectModel("Reserves") private readonly model: Model<ReservesModel>
  ) { }

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

  async findByUserId(idUser: string, timeOpen: string): Promise<ReservesModel> {
    const query = timeOpen ? { idUser: idUser, timeOpen: timeOpen } : { idUser: idUser };
    return await this.model.find(query).exec();
  }

  async findByUserBetweenDates(idUser: string, timeOpen: string, timeClose: string): Promise<ReservesModel> {
    return await this.model.find({
      idUser: idUser,
      timeOpen: {
        $gte: timeOpen,
      },
      timeClose: {
        $lte: timeClose
      }
    }, {}, {
      sort: {
        timeOpen: 1
      }
    }).exec();
  }

  async findByPeriod(type: String, min: string, max: string): Promise<ReservesModel> {
    const query = type == "timeOpen"
      ? { timeOpen: { $gte: min, $lte: max } }
      : { timeClose: { $gte: min, $lte: max } };
    const sort = type == "timeOpen"
      ? { timeOpen: 1 }
      : { timeClose: 1 };
    return await this.model.find(query, {}, { sort: sort }).exec();
  }

  async delete(id: string): Promise<ReservesModel> {
    return await this.model.findByIdAndRemove({ _id: id }).exec();
  }

  async update(id: string, model: ReservesModel): Promise<ReservesModel> {
    const cultureUpdate = await this.model.findOne({ _id: id }).exec();
    const { idResources, idUser, idSubject, timeOpen, timeClose } = model;
    if (idResources) {
      cultureUpdate.idResources = idResources;
    }
    if (idUser) {
      cultureUpdate.idUser = idUser;
    }
    if (idSubject) {
      cultureUpdate.irrigacao = idSubject;
    }
    if (timeOpen) {
      cultureUpdate.irrigacao = timeOpen;
    }
    if (timeClose) {
      cultureUpdate.irrigacao = timeClose;
    }

    return await cultureUpdate.save();
  }
}
