import fastify from "fastify";
import fastifyFormbody from "@fastify/formbody";
import fastifyStatic from "@fastify/static";
import fastifyView from "@fastify/view";
import ejs from 'ejs';
import { join } from "node:path";
import cors from "cors";
import { c, latex, python, scilab } from "../src/action.js"; // Ajustez le chemin d'import


export default async function handler(req, res) {
  // Configuration Vercel
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
 
  // Gestion des requêtes OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Créer une instance Fastify
  const app = fastify({logger:true})

  // Enregistrer les plugins
  app.register(fastifyView, {
    engine: { ejs }
  });

  app.register(fastifyStatic, {
    root: join(process.cwd(), 'public')
  });

  app.register(fastifyFormbody);

  // Définir les routes
  app.get("/", (request, reply) => {
    return reply.redirect('index.html');
  });

  app.get('/python/test', async (request, reply) => {
    return reply.view('template/form.ejs', {
      python: "python"
    });
  });

  app.get('/latex/test', async (request, reply) => {
    return reply.view('template/form.ejs', {
      latex: "latex"
    });
  });

  app.get('/scilab/test', async (request, reply) => {
    return reply.view('template/form.ejs', {
      scilab: "scilab"
    });
  });

  app.get('/c++/test', async (request, reply) => {
    return reply.view('template/form.ejs', {
      c: "c++"
    });
  });

  app.post('/python/test', python);
  app.post('/c++/test', c);
  app.post('/scilab/test', scilab);
  app.post('/latex/test', latex);

  // Gérer la requête
try {
    handler(req,res)
    const response = await app.routing(req, res);
    return response;
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true, 
      message: "Erreur serveur interne",
      details: error.message 
    });
}
}



