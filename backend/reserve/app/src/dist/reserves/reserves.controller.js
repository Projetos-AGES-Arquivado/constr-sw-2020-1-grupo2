"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const reserves_service_1 = require("./reserves.service");
let ReservesController = class ReservesController {
    constructor(service) {
        this.service = service;
    }
    async create(body, res) {
        const model = body;
        try {
            if (!model) {
                console.log(body);
                return res.status(400).json({ message: 'Reserva inválida!' });
            }
            const reserves = await this.service.create(model);
            return res.status(201).json(reserves);
        }
        catch (error) {
            return res
                .status(400)
                .json({ message: 'Ops! Ocorreu um erro ao criar as reservas', error });
        }
    }
    async findAll(res) {
        try {
            const reserves = await this.service.findAll();
            return res.status(200).json(reserves);
        }
        catch (error) {
            return res
                .status(400)
                .json({ message: 'Ops! Ocorreu um erro ao buscar as reservas', error });
        }
    }
    async findByID(params, res) {
        try {
            const reserves = await this.service.findById(params.id);
            return res.status(200).json(reserves);
        }
        catch (error) {
            return res
                .status(400)
                .json({ message: 'Ops! Ocorreu um erro ao buscar as reservas', error });
        }
    }
    async update(id, res, body) {
        const model = body;
        try {
            const reservas = await this.service.update(id, model);
            return res.status(200).json({ message: 'Alterado com sucesso!' });
        }
        catch (error) {
            return res.status(400).json({
                message: 'Ops! Ocorreu um erro ao alterar as reservas',
                error,
            });
        }
    }
    async delete(id, res) {
        try {
            const reserves = await this.service.delete(id);
            return res.status(200).json({ message: 'Removido com sucesso!' });
        }
        catch (error) {
            return res
                .status(400)
                .json({ message: 'Ops! Ocorreu um erro ao buscar as reservas', error });
        }
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReservesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReservesController.prototype, "findByID", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReservesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReservesController.prototype, "delete", null);
ReservesController = __decorate([
    common_1.Controller('reserves'),
    __metadata("design:paramtypes", [reserves_service_1.ReservesService])
], ReservesController);
exports.ReservesController = ReservesController;
//# sourceMappingURL=reserves.controller.js.map