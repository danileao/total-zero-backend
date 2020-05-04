import { sign } from "jsonwebtoken";
import User from "../schemas/User";
import { compare } from "bcryptjs";

class SessionController {
  async create(request, response) {
    const { username, password } = request.body;

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return response.status(404).json({ error: "User not found!" });
    }

    const matchPassword = await compare(password, user.password);

    if (!matchPassword) {
      return response
        .status(404)
        .json({ error: "Incorrect password ou username!" });
    }

    const token = sign({}, "a3f7c365677abec9f3c2a927669b60c2", {
      subject: new String(user._id),
      expiresIn: "1d",
    });

    return response.json({
      token,
      user,
    });
  }
}

export default new SessionController();
