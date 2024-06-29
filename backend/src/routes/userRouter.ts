import { PrismaClient } from '@prisma/client/edge'
import {Hono} from 'hono'
import {withAccelerate} from "@prisma/extension-accelerate";
import {sign} from "hono/jwt";

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
        const user = await prisma.user.create({
            data:{
                username: body.username,
                email:body.email,
                fullname: body.fullname,
                password: body.password,
            }
        })
        const token = await sign({
            id: user.u_id,
        },c.env.jwt_secret);
        return c.json({
            message:true,
            token:token
        })
    }
    catch(e){
        c.status(411);
        return c.json({
            message:"Something went wrong",
        })
    }
});

userRouter.post("/login",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    })
    const body = await c.req.json();
    try{
        const user = await prisma.user.findFirst({
            where:{
                username: body.username,
                email:body.email,
            }
        })
        if(!user){
            c.status(403);
            return c.json({
                message: "Invalid Credentials!"
            })
        }
        const token = await sign({
            id: user.u_id,
        },c.env.jwt_secret);
        return c.json({
            message: true,
            token: token
        });
    }
    catch(e){
        c.status(403);
        return c.json({
            message:"User not found",
        })
    }
})