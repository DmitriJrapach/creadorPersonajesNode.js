import { Router } from "express";
import charController from "../controllers/charController.js";

const charRouter = Router();

charRouter.get("/personajes", charController.getChars)
charRouter.get('/personajes/nuevo', charController.renderCreateForm);
charRouter.get('/personajes/:id/ver', charController.renderCharDetail);


charRouter.post("/personajes", charController.createChar)
charRouter.put("/personajes/:id", charController.updateChar)
charRouter.delete("/personajes/:id", charController.deleteChar)






export default charRouter