"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../schemas/User"));

var _bcryptjs = require("bcryptjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async create(request, response) {
    const {
      name,
      email,
      username,
      password,
      phone
    } = request.body;
    const passwordCrypt = await (0, _bcryptjs.hash)(password, 8);
    const user = await _User.default.create({
      name,
      email,
      username,
      password: passwordCrypt,
      phone
    });
    return response.json(user);
  }

  async index(request, response) {
    const users = await _User.default.find();
    return response.json(users);
  }

}

var _default = new UserController();

exports.default = _default;