import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Product from "../models/Product.js";
import generateToken from "../utils/generateToken.js";
import auth from "../middleware/auth.js";

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find().populate("createdBy");
    },
    product: async (_, { id }) => {
      return await Product.findById(id).populate("createdBy");
    },
    me: async (_, __, { token }) => {
      return await auth(token);
    },
  },
  Mutation: {
    register: async (_, { name, email, password }) => {
      const existing = await User.findOne({ email });
      if (existing) throw new Error("Email already exists");
      const hashed = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashed });
      const token = generateToken(user._id);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("Invalid credentials");
      const match = await bcrypt.compare(password, user.password);
      if (!match) throw new Error("Invalid credentials");
      const token = generateToken(user._id);
      return { token, user };
    },
    createProduct: async (_, args, { token }) => {
      const user = await auth(token);
      return await Product.create({ ...args, createdBy: user._id });
    },
    updateProduct: async (_, { id, ...data }, { token }) => {
      await auth(token);
      return await Product.findByIdAndUpdate(id, data, { new: true });
    },
    deleteProduct: async (_, { id }, { token }) => {
      await auth(token);
      await Product.findByIdAndDelete(id);
      return "Product deleted successfully";
    },
  },
};

export default resolvers;
