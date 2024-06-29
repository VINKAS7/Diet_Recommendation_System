"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodInput = exports.bodyInput = exports.loginInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    fullname: zod_1.default.string(),
    username: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8)
});
exports.loginInput = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string().min(8)
});
exports.bodyInput = zod_1.default.object({
    age: zod_1.default.number(),
    weight: zod_1.default.number(),
    height: zod_1.default.number(),
    gender: zod_1.default.string(),
    allergies: zod_1.default.string(),
    medical_condition: zod_1.default.string(),
    time: zod_1.default.string()
});
exports.foodInput = zod_1.default.object({
    type: zod_1.default.string(),
    cal: zod_1.default.number(),
    protein: zod_1.default.number(),
    fat: zod_1.default.number(),
    Carbs: zod_1.default.number(),
});
