// services/raceService.js
import { createRaza, getAllRazas } from "../dao/raceDAO.js";

export const createRazaService = async (razaData) => {
  return await createRaza(razaData);
};

export const getRazasService = async () => {
  return await getAllRazas();
};