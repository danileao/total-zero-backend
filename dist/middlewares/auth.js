"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _default = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      error: "User not authorizated!"
    });
  } // Bearer dswfjefkfjdksfjkdfgjksdjfdsf;


  const [, token] = authHeader.split(" ");

  try {
    (0, _jsonwebtoken.verify)(token, "a3f7c365677abec9f3c2a927669b60c2");
    return next();
  } catch (err) {
    return response.status(401).json({
      error: "Invalid Jwt Token"
    });
  }
};

exports.default = _default;