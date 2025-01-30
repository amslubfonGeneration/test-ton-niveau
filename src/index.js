import fastify  from "fastify"
import fastifyFormbody from "@fastify/formbody"
import fastifyStatic from "@fastify/static"
import fastifyView from "@fastify/view"
import ejs from 'ejs'
import {dirname, join} from 'node:path'
import { clevel1, latexlevel1, pythonlevel1, scilablevel1 } from "./actionlevel1.js"
import { clevel2, latexlevel2, pythonlevel2, scilablevel2 } from "./actionlevel2.js"
import fastifyCookie from "@fastify/cookie"
import { fileURLToPath } from "node:url"
import { traitementMailPost } from "./email.js"
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))
const app = fastify()


app.register(fastifyView,{
    engine: {
        ejs
    }
})
app.register(fastifyStatic, {
    root:join(rootDir,'public')
})
app.register(fastifyFormbody)
app.register(fastifyCookie)

app.get("/",(req,res)=>{
    return res.redirect('index.html')
})
app.get("/contacter_nous",(req,res)=>{
    return res.view('template/email.ejs')
})
app.get('/python/level1', async (req,res) =>{
    return res.view('template/level1.ejs',{
        python:"pythonlevel1"
    })
})
app.get('/latex/level1', async (req,res) =>{
    return res.view('template/level1.ejs',{
        latex:"latexlevel1"
    })
})
app.get('/scilab/level1', async (req,res) =>{
    return res.view('template/level1.ejs',{
        scilab:"scilablevel1"
    })
})
app.get('/c++/level1', async (req,res) =>{
    return res.view('template/level1.ejs',{
        c:"c++level1"
    })
})




app.post('/python/level1', pythonlevel1)
app.post('/c++/level1', clevel1)
app.post('/scilab/level1', scilablevel1)
app.post('/latex/level1', latexlevel1)

app.post('/python/level2', pythonlevel2)
app.post('/c++/level2', clevel2)
app.post('/scilab/level2', scilablevel2)
app.post('/latex/level2', latexlevel2)
app.post('/contacter_nous', traitementMailPost)

app.setErrorHandler((error,req,res) => {
    console.error(error)
    res.statusCode = 500
    return {
        error: error.message  
    }
})

app.listen({host: host, port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
