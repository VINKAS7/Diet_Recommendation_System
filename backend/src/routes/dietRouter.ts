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
        c.set("user_id",user.id);
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
    // @ts-ignore
    try{
        await prisma.diet.create({
            //@ts-ignore
            data:{
                weight: Number(body.weight),
                height: Number(body.height),
                age: Number(body.age),
                gender: body.gender,
                allergies: body.allergies,
                medical_condition: body.medical_condition,
                time: new Date().toISOString(),
                //@ts-ignore
                diet_id: Number(c.get("user_id")),
            }
        })
        return c.json({
            message:true
        })
    }
    catch(e){
        console.log(e);
        c.status(411);
        return c.json({
            message:"Error"
        })
    }
})
dietRouter.get("/get_id",async (c) => {
    try{
        //@ts-ignore
        return c.text(c.get("user_id"))
    }
    catch(e){
        return c.text("error id")
    }
})
dietRouter.get("/diet_info",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,

    })
})