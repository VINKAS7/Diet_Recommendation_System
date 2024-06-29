import zod from "zod"
export const signupInput = zod.object({
    fullname:zod.string(),
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8)
})

export const loginInput = zod.object({
    username: zod.string(),
    password: zod.string().min(8)
})

export const bodyInput = zod.object({
    age:zod.number(),
    weight:zod.number(),
    height: zod.number(),
    gender:zod.string(),
    allergies:zod.string(),
    medical_condition:zod.string(),
    time:zod.string()
})

export const foodInput = zod.object({
    type:zod.string(),
    cal:zod.number(),
    protein:zod.number(),
    fat:zod.number(),
    Carbs:zod.number(),
})

export type SignupInput = zod.infer<typeof signupInput>
export type LoginInput = zod.infer<typeof loginInput>
export type BodyInput = zod.infer<typeof bodyInput>
export type UpdateBlogInput = zod.infer<typeof foodInput>