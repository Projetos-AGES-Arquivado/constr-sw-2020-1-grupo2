"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const env = process.env.NODE_ENV || 'development';
const ENV = config_1.default[env];
exports.default = ENV;
//# sourceMappingURL=env.js.map