import { Router } from "express";

import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";

import auth from "./middlewares/auth";

const routes = new Router();
app.get("/teste", (request, response) => {
  const projetos = [
    { id: 1, name: "Projeto Nodejs" },
    { id: 2, name: "Projeto ReactJS" },
    { id: 3, name: "Projeto Deploy" },
    { id: 4, name: "Projeto Deploy em processo" },
    { id: 5, name: "Projeto Deploy Finalizado" },
  ];

  return response.json(projetos);
});
routes.post("/users", UserController.create);
routes.post("/session", SessionController.create);

//MIDDLEWARE
routes.use(auth);

routes.get("/users", UserController.index);

export default routes;
