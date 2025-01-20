import fastifyStatic from "@fastify/static";
import fastifyView from "@fastify/view";
import fastify from "fastify";
import {dirname, join} from "node:path"
import { fileURLToPath } from "node:url";
import ejs from "ejs"


export const rootDir = dirname(fileURLToPath(import.meta.url))
const app = fastify()
app.register(fastifyView,{
    engine: {
        ejs
    }
})
app.register(fastifyStatic, {
    root:join(rootDir,'public')
})

app.get('/test', (req, res)=>{
    res.status(200).send("test d'api fastify")
    res.redirect('/index.html')
})

const start = async () => {
    try{
        await app.listen({port:8000})
    }catch (err){
        console.error(err)
        process.exit(1)
    }
}
start()