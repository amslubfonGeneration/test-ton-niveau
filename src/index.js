import fastify  from "fastify"
import fastifyFormbody from "@fastify/formbody"
import fastifyStatic from "@fastify/static"
import fastifyView from "@fastify/view"
import ejs from 'ejs'
import { c, latex, python, scilab } from "./action.js"
import { createClient } from "@supabase/supabase-js"
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'

const app = fastify()

export const supabase = createClient("https://exspulecubopvnyxumww.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c3B1bGVjdWJvcHZueXh1bXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MzkyMTAsImV4cCI6MjA1MjUxNTIxMH0.6O2XROXycYI_dVsneOhy2qpwzYpYmDv0kt4xJylPF7c"
)
const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))

app.register(fastifyView,{
    engine: {
        ejs
    }
})
app.register(fastifyStatic, {
    root:join(rootDir,'public')
})
app.register(fastifyFormbody)

app.get("/",(req,res)=>{
    return res.redirect('index.html')
})
app.get('/python/test', async (req,res) =>{
    return res.view('template/form.ejs',{
        python:"python"
    })
})
app.get('/latex/test', async (req,res) =>{
    return res.view('template/form.ejs',{
        latex:"latex"
    })
})
app.get('/scilab/test', async (req,res) =>{
    return res.view('template/form.ejs',{
        scilab:"scilab"
    })
})
app.get('/c++/test', async (req,res) =>{
    return res.view('template/form.ejs',{
        c:"c++"
    })
})

app.post('/python/test', python)
app.post('/c++/test', c)
app.post('/scilab/test', scilab)
app.post('/latex/test', latex)


app.setErrorHandler((error,req,res) => {
    console.error(error)
    res.statusCode = 500
    return {
        error: error.message  
    }
})

const start = async () => {
        try{
            await app.listen({port:10000})
        }catch (err){
            console.error(err)
            process.exit(1)
        }
}
start()
