import {hono} from hono ;
const app = hono()
app.post('/',async (c)=>{
    const body = await c.req.json;
    console.log(c.req.header("Authorization"));
    console.log(c.log.query("params"));
    return c.text('hello hono!')
})