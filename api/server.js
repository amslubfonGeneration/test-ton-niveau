import fastify from "fastify";

const app = fastify({logger:true})

app.get('/', (req, res)=>{
  res.send('hello word')
})

module.exports = app