import { Request, Response } from "express";
import login from "./login";
import signup from "./signup";
import calendar from "./calendar";
import timeline from "./timeline";
import todocalendar from "./todocalendar";
import startpage from "./startpage";
import diary from "./diary";

declare module "express-session" {
  interface SessionData {
    user: number;
  }
}

//index page
async function index(req: Request, res: Response) {
  res.render("index");
}

export default {
  index,
  //login
  loginPage: login.get,
  login: login.post,
  processRequest: login.processRequest,
  //signup
  signupPage: signup.get,
  signup: signup.post,
  // todo calendar
  todoCalendar: calendar.get,
  // startpage
  StartPage: startpage.get,
  //dairy
  diary: diary.get,
  //timeline
  timeline: timeline.get,
  //todocalendar
  todocalendar: todocalendar.get,
};
