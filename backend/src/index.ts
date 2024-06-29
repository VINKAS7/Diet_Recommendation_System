import { Hono } from 'hono'
import {userRouter} from "./routes/userRouter";
import {dietRouter} from "./routes/dietRouter";

const app = new Hono()

app.route("/api/v1/user",userRouter);
app.route("/api/v1/diet",dietRouter);
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
