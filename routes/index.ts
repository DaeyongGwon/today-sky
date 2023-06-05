import { Router } from "express";
import controller from "@/controller";
import diary from "./diary";
import express from "express";

import { TodoCalendarController } from "../controller/todocalendarController";

const todocalendarController = new TodoCalendarController();

const router = express.Router();
const route = Router();
//index route
route.get("/", controller.index);

//login route
route.get("/login", controller.loginPage);
route.post("/login", controller.login);

//signup route
route.get("/signup", controller.signupPage);
route.post("/signup", controller.signup);

//todo route
route.get("/todo", controller.createPage);
route.post("/todo", controller.createTodo);

//diary route
route.use("/diary", diary);

route.get(
  "/todocalendar",
  todocalendarController.getTodoCalendar.bind(todocalendarController)
);

route.get("/todocalendar", function (req, res) {
  res.render("todocalendar");
});

export default route;
