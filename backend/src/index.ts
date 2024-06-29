import { Hono } from 'hono'
import {userRouter} from "./routes/userRouter";
import {dietRouter} from "./routes/dietRouter";
import {cors} from "hono/cors"
const app = new Hono()
app.use("/*",cors());
app.route("/api/v1/user",userRouter);
app.route("/api/v1/diet",dietRouter);
app.get("/",(c) => {
    return c.text("Hello Hono!")
})
export default app
