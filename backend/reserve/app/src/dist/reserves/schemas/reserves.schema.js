"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ReservesSchema = new mongoose.Schema({
    idResources: {
        type: [],
    },
    idUser: {
        type: String,
    },
    idSubject: {
        type: String,
    },
    timeStart: {
        type: Date,
    },
    timeClose: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=reserves.schema.js.map