import { ReservesService } from './reserves.service';
import { ReservesModel } from './models/reserves.model';
export declare class ReservesController {
    private readonly service;
    constructor(service: ReservesService);
    create(body: any, res: any): Promise<any>;
    findAll(res: any): Promise<ReservesModel[]>;
    findByID(params: any, res: any): Promise<ReservesModel[]>;
    update(id: string, res: any, body: any): Promise<ReservesModel>;
    delete(id: string, res: any): Promise<ReservesModel>;
}
