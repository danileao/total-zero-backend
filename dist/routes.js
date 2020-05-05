"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("./controllers/UserController"));

var _SessionController = _interopRequireDefault(require("./controllers/SessionController"));

var _auth = _interopRequireDefault(require("./middlewares/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = new _express.Router();
routes.post("/users", _UserController.default.create);
routes.post("/session", _SessionController.default.create); //MIDDLEWARE

routes.use(_auth.default);
routes.get("/users", _UserController.default.index);
var _default = routes;
exports.default = _default;