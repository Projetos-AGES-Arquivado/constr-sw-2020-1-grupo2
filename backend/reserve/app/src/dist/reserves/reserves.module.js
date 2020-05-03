"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const reserves_service_1 = require("./reserves.service");
const reserves_schema_1 = require("./schemas/reserves.schema");
const reserves_controller_1 = require("./reserves.controller");
let ReservesModule = class ReservesModule {
};
ReservesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Reserves', schema: reserves_schema_1.ReservesSchema }]),
        ],
        providers: [reserves_service_1.ReservesService],
        exports: [reserves_service_1.ReservesService],
        controllers: [reserves_controller_1.ReservesController],
    })
], ReservesModule);
exports.ReservesModule = ReservesModule;
//# sourceMappingURL=reserves.module.js.map