import { PrismaClient } from '@prisma/client/edge'
import {Hono} from 'hono'
import {withAccelerate} from "@prisma/extension-accelerate";
export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        jwt_secret:string,
    }
}>()
userRouter.post("/signup",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    try{
        await prisma.user.create({
            data:{
                username: body.username,
                email:body.email,
                fullname: body.fullname,
                password: body.password,
            }
        })
        return c.json({
            message:"Signup Successful!"
        })
    }
    catch(e){
        c.status(411);
        return c.json({
            message:"Something went wrong",
        })
    }
})