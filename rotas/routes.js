const routes = require("express").Router();
import { getAll } from "../controller/TaskController";

routes.get("/", getAll)
