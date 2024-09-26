import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const personajeSchema = new Schema({
  nombre: { type: String, required: true },
  raza: { type: String, required: true },
  clase: { type: String, required: true },
  puntosEstadisticas: {
    fuerza: { type: Number, default: 0 },
    destreza: { type: Number, default: 0 },
    constitucion: { type: Number, default: 0 },
    inteligencia: { type: Number, default: 0 },
    sabiduria: { type: Number, default: 0 },
    carisma: { type: Number, default: 0 }
  }
});

const Personaje = model('Personaje', personajeSchema);

export default Personaje;