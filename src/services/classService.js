// services/classService.js
import { createClase, getAllClases } from "../dao/classDAO.js";

export const createClaseService = async (claseData) => {
  return await createClase(claseData);
};

export const getClasesService = async () => {
  return await getAllClases();
};