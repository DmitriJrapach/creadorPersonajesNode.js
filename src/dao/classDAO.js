// dao/classDAO.js
import Clase from "../models/class.js";

export const createClase = async (claseData) => {
  const nuevaClase = new Clase(claseData);
  return await nuevaClase.save();
};

export const getAllClases = async () => {
  return await Clase.find();
};