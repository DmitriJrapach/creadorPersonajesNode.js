import {Router} from "express";
import viewController from "../controllers/viewController.js";


const viewRouter = Router();

viewRouter.get("/index", viewController.index)
viewRouter.get("/charCreator", viewController.charCreator)



export default viewRouter