import charDAO from "../dao/charDAO.js";

const charService = {
  getAllCharacters: () => {
    return charDAO.getAll();
  },

  getCharacterById: (id) => {
    return charDAO.getById(id);
  },

  createCharacter: (data) => {
    return charDAO.create(data);
  },

  updateCharacter: (id, data) => {
    return charDAO.update(id, data);
  },

  deleteCharacter: (id) => {
    return charDAO.delete(id);
  }
};

export default charService;