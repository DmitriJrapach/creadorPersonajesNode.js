// controllers/raceController.js
import { createRazaService, getRazasService } from "../services/raceService.js";

export const createRazaController = async (req, res) => {
  try {
    const raza = await createRazaService(req.body);
    res.status(201).json(raza);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la raza", error });
  }
};

export const getRazasController = async (req, res) => {
  try {
    const razas = await getRazasService();
    res.status(200).json(razas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las razas", error });
  }
};