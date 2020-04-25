import { Router } from "express";

import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";

import auth from "./middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.create);
routes.post("/session", SessionController.create);

//MIDDLEWARE
routes.use(auth);

routes.get("/users", UserController.index);

export default routes;
