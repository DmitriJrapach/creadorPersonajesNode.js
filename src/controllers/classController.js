// controllers/classController.js
import { createClaseService, getClasesService } from "../services/classService.js";

export const createClaseController = async (req, res) => {
  try {
    const clase = await createClaseService(req.body);
    res.status(201).json(clase);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la clase", error });
  }
};

export const getClasesController = async (req, res) => {
  try {
    const clases = await getClasesService();
    res.status(200).json(clases);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las clases", error });
  }
};