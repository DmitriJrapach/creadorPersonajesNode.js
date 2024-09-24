// routes/raceRouter.js
import express from "express";
import { createRazaController, getRazasController } from "../controllers/raceController.js";

const raceRouter = express.Router();

raceRouter.post("/create", createRazaController);
raceRouter.get("/", getRazasController);

export default raceRouter;