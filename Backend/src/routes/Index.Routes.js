import express from "express";
import authRoutes from "./Auth.Routes.js";

const routes = express.Router();

routes.use("/auth", authRoutes);

export default routes;
