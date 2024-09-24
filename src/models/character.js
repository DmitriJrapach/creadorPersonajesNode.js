// models/Personaje.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const personajeSchema = new Schema({
  nombre: { type: String, required: true },
  raza: { type: Schema.Types.ObjectId, ref: 'Raza', required: true },
  clase: { type: Schema.Types.ObjectId, ref: 'Clase', required: true },
  modificadores_totales: {
    fuerza: { type: Number, default: 0 },
    destreza: { type: Number, default: 0 },
    constitucion: { type: Number, default: 0 },
    inteligencia: { type: Number, default: 0 },
    sabiduria: { type: Number, default: 0 },
    carisma: { type: Number, default: 0 }
  },
  velocidad: { type: Number, default: 0 },
  habilidades: [String] // Combinar habilidades de raza y clase
});

const Personaje = model('Personaje', personajeSchema);

export default Personaje;
