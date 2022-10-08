import express from "express";
import usersData from "./public/api/users/index.json";

export const routes = express.Router();

routes.route("/").get((req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

routes.route("/users").get((req, res) => {
  res.status(200).json(usersData);
});
