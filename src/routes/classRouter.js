// routes/classRouter.js
import express from "express";
import { createClaseController, getClasesController } from "../controllers/classController.js";

const classRouter = express.Router();

classRouter.post("/create", createClaseController);
classRouter.get("/", getClasesController);

export default classRouter;