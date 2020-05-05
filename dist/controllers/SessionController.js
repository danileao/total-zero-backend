"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _User = _interopRequireDefault(require("../schemas/User"));

var _bcryptjs = require("bcryptjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SessionController {
  async create(request, response) {
    const {
      username,
      password
    } = request.body;
    const user = await _User.default.findOne({
      username
    });

    if (!user) {
      return response.status(404).json({
        error: "User not found!"
      });
    }

    const matchPassword = await (0, _bcryptjs.compare)(password, user.password);

    if (!matchPassword) {
      return response.status(404).json({
        error: "Incorrect password ou username!"
      });
    }

    const token = (0, _jsonwebtoken.sign)({}, "a3f7c365677abec9f3c2a927669b60c2", {
      subject: new String(user._id),
      expiresIn: "1d"
    });
    return response.json({
      token,
      user
    });
  }

}

var _default = new SessionController();

exports.default = _default;