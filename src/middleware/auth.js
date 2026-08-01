import jwt from "jsonwebtoken";
import User from "../models/User.js";

const auth = async (token) => {
  if (!token) throw new Error("Not authorized");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) throw new Error("User not found");
  return user;
};

export default auth;
