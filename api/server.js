import fastify from "fastify";
import fastifyfunction from "../src/index.js";
const app = fastify()

export default async function handler(req, res){
   fastifyfunction(app)
}



