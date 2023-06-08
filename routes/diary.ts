import { Router } from "express";
import diary from "@/controller/diary";

const route = Router();

route.get("/:year/:month/:date/write", diary.diaryWrite);
route.get("/:year/:month/:date", diary.daily);
route.get("/:year/:month", diary.monthly);
route.get("*", diary.redirectMonthly);

export default route;
