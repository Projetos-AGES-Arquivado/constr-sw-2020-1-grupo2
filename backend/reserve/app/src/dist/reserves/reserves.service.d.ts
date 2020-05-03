import { Model } from 'mongoose';
import { ReservesModel } from './models/reserves.model';
export declare class ReservesService {
    private readonly model;
    constructor(model: Model<ReservesModel>);
    create(model: ReservesModel): Promise<ReservesModel>;
    findAll(): Promise<ReservesModel[]>;
    findById(id: string): Promise<ReservesModel>;
    delete(id: string): Promise<ReservesModel>;
    update(id: string, model: ReservesModel): Promise<ReservesModel>;
}
