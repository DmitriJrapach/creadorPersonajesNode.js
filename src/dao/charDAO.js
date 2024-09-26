import Character from "../models/character.js"; // Asegúrate de tener un modelo para 'Character'

const charDAO = {
  getAll: async () => {
    return await Character.find();
  },

  getById: async (id) => {
    return await Character.findById(id);
  },

  create: async (data) => {
    const newCharacter = new Character(data);
    return await newCharacter.save();
  },

  update: async (id, data) => {
    return await Character.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    return await Character.findByIdAndDelete(id);
  }
};

export default charDAO;