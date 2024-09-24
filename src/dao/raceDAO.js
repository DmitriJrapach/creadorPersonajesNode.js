// dao/raceDAO.js
import Raza from "../models/race.js";

export const createRaza = async (razaData) => {
  const nuevaRaza = new Raza(razaData);
  return await nuevaRaza.save();
};

export const getAllRazas = async () => {
  return await Raza.find();
};