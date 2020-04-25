import { verify } from "jsonwebtoken";

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "User not authorizated!" });
  }

  // Bearer dswfjefkfjdksfjkdfgjksdjfdsf;
  const [, token] = authHeader.split(" ");

  try {
    verify(token, "a3f7c365677abec9f3c2a927669b60c2");

    return next();
  } catch (err) {
    return response.status(401).json({ error: "Invalid Jwt Token" });
  }
};
