"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'ebdb_tpdk',
    synchronize: true,
    ssl: { rejectUnauthorized: false },
    logging: false,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
});
exports.default = exports.AppDataSource;
