import charService from "../services/charService.js";
import Raza from '../models/race.js'; // Modelo de raza
import Clase from '../models/class.js'; // Modelo de clase


const charController = {
  getChars: async (req, res) => {
    try {
      const personajes = await charService.getAllCharacters();
      res.status(200).json(personajes);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener personajes", error });
    }
  },

  getCharById: async (req, res) => {
    try {
      const id = req.params.id;
      const personaje = await charService.getCharacterById(id);
      
      if (!personaje) {
        return res.status(404).json({ message: "Personaje no encontrado" });
      }
      
      // Cargar raza y clase desde la base de datos
      const raza = await Raza.findById(personaje.raza);
      const clase = await Clase.findById(personaje.clase);
      
      // Añadir habilidades y modificadores a los datos del personaje
      const personajeCompleto = {
        ...personaje._doc, // Todos los datos del personaje
        raza: raza ? raza.nombre : "Raza no encontrada",
        clase: clase ? clase.clase : "Clase no encontrada",
        habilidades: raza.habilidades, // Puedes agregar más datos de raza/clase
        modificadores: raza.modificadores,
      };
      
      res.status(200).json(personajeCompleto);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener personaje", error });
    }
  },
  createChar: async (req, res) => {
    try {
      const { nombre, clase, raza, estadisticas } = req.body;
  
      // Busca la raza por su ID para obtener las habilidades y modificadores
      const razaEncontrada = await Raza.findById(raza);
      if (!razaEncontrada) {
        return res.status(400).json({ message: "Raza no encontrada" });
      }
  
      // Validación básica de las estadísticas
      const puntosEstadisticas = {
        fuerza: estadisticas.fuerza || 0,
        destreza: estadisticas.destreza || 0,
        constitucion: estadisticas.constitucion || 0,
        inteligencia: estadisticas.inteligencia || 0,
        sabiduria: estadisticas.sabiduria || 0,
        carisma: estadisticas.carisma || 0
      };
  
      const data = {
        nombre,
        clase,
        raza,
        puntosEstadisticas,  // Mapea las estadísticas correctamente
      };
  
      const newCharacter = await charService.createCharacter(data);
      res.status(201).json(newCharacter);
    } catch (error) {
      res.status(500).json({ message: "Error al crear personaje", error });
    }
  },

  updateChar: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const updatedCharacter = await charService.updateCharacter(id, updatedData);
      if (!updatedCharacter) {
        return res.status(404).json({ message: "Personaje no encontrado" });
      }
      res.status(200).json(updatedCharacter);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar personaje", error });
    }
  },

  deleteChar: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedCharacter = await charService.deleteCharacter(id);
      if (!deletedCharacter) {
        return res.status(404).json({ message: "Personaje no encontrado" });
      }
      res.status(200).json({ message: "Personaje eliminado", deletedCharacter });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar personaje", error });
    }
  },
  renderCreateForm: async (req, res) => {
    try {
      const razas = await Raza.find();
      const clases = await Clase.find();
      res.render('createChar', { razas, clases });
    } catch (error) {
      res.status(500).json({ message: 'Error al cargar el formulario', error });
    }
  },
  renderCharDetail: async (req, res) => {
    try {
      const id = req.params.id;
      const personaje = await charService.getCharacterById(id);
      const raza = await Raza.findById(personaje.raza);
      const clase = await Clase.findById(personaje.clase);

      const personajeCompleto = {
        ...personaje._doc,
        raza: raza ? raza.nombre : "Raza no encontrada",
        clase: clase ? clase.clase : "Clase no encontrada",
        habilidades: raza.habilidades,
        modificadores: raza.modificadores,
      };

      res.render('detallePersonaje', { personaje: personajeCompleto });
    } catch (error) {
      res.status(500).json({ message: "Error al mostrar el detalle del personaje", error });
    }
}
};

export default charController;