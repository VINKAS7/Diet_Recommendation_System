import {Hono} from 'hono';
import {verify} from "hono/jwt";
import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";
export const dietRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        jwt_secret:string,
    }
}>()
dietRouter.use("/*",async (c,next) => {
    const authHeader = c.req.header('Authorization') || "";
    const user = await verify(authHeader,c.env.jwt_secret) || "";
    if(user){
        // @ts-ignore
        c.set("authorId",user.id);
    }
    else{
        return c.json({
            message: "You are not Logged in",
        })
    }
    await next();
})
dietRouter.post("/diet_information",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json();

})

dietRouter.get("/diet_info",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,

    })
})