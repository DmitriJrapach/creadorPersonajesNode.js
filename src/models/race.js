// models/raza.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const razaSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  modificadores: {
    fuerza: { type: Number, default: 0 },
    destreza: { type: Number, default: 0 },
    constitucion: { type: Number, default: 0 },
    inteligencia: { type: Number, default: 0 },
    sabiduria: { type: Number, default: 0 },
    carisma: { type: Number, default: 0 },
  },
  velocidad: { type: Number, required: true },
  habilidades: [String]
});

const Raza = model('Raza', razaSchema);

export default Raza;
