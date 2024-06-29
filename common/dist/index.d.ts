import zod from "zod";
export declare const signupInput: zod.ZodObject<{
    fullname: zod.ZodString;
    username: zod.ZodString;
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    fullname: string;
    username: string;
    email: string;
    password: string;
}, {
    fullname: string;
    username: string;
    email: string;
    password: string;
}>;
export declare const loginInput: zod.ZodObject<{
    username: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const bodyInput: zod.ZodObject<{
    age: zod.ZodNumber;
    weight: zod.ZodNumber;
    height: zod.ZodNumber;
    gender: zod.ZodString;
    allergies: zod.ZodString;
    medical_condition: zod.ZodString;
    time: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    age: number;
    weight: number;
    height: number;
    gender: string;
    allergies: string;
    medical_condition: string;
    time: string;
}, {
    age: number;
    weight: number;
    height: number;
    gender: string;
    allergies: string;
    medical_condition: string;
    time: string;
}>;
export declare const foodInput: zod.ZodObject<{
    type: zod.ZodString;
    cal: zod.ZodNumber;
    protein: zod.ZodNumber;
    fat: zod.ZodNumber;
    Carbs: zod.ZodNumber;
}, "strip", zod.ZodTypeAny, {
    type: string;
    cal: number;
    protein: number;
    fat: number;
    Carbs: number;
}, {
    type: string;
    cal: number;
    protein: number;
    fat: number;
    Carbs: number;
}>;
export type SignupInput = zod.infer<typeof signupInput>;
export type LoginInput = zod.infer<typeof loginInput>;
export type BodyInput = zod.infer<typeof bodyInput>;
export type UpdateBlogInput = zod.infer<typeof foodInput>;
