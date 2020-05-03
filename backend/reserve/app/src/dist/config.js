"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    development: {
        db_url: process.env.MONGO_URI,
    },
    homolog: {
        db_url: process.env.MONGO_URI,
    },
    prod: {
        db_url: "",
    },
};
//# sourceMappingURL=config.js.map