import fastifyFormbody from "@fastify/formbody";
import fastifyStatic from "@fastify/static";
import fastifyView from "@fastify/view";
import ejs from 'ejs';
import { join } from "node:path";
import { c, latex, python, scilab } from "../src/action.js"; // Ajustez le chemin d'import
import { rootDir } from "../src/conf.js";


export default async function handler(req, res) {
  // Configuration Vercel
  res.setHeader('Access-Control-Allow-Credentials',true);
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
    root: join(rootDir, 'public')
  });

  app.register(fastifyFormbody);

  // Définir les routes
  app.get("/api", (request, reply) => {
    return reply.redirect('index.html');
  });

  app.get('/api/python/test', async (request, reply) => {
    return reply.view('template/form.ejs', {
      python: "python"
    });
  });

  app.get('/api/latex/test', async (request, reply) => {
    return reply.view('template/form.ejs', {
      latex: "latex"
    });
  });

  app.get('/api/scilab/test', async (request, reply) => {
    return reply.view('template/form.ejs', {
      scilab: "scilab"
    });
  });

  app.get('/api/c++/test', async (request, reply) => {
    return reply.view('template/form.ejs', {
      c: "c++"
    });
  });

  app.post('/api/python/test', python);
  app.post('/api/c++/test', c);
  app.post('/api/scilab/test', scilab);
  app.post('/api/latex/test', latex);

  // Gérer la requête
try {
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





