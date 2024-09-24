// models/clase.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const claseSchema = new Schema({
  clase: { type: String, required: true },
  descripcion: { type: String, required: true },
  dadoDeGolpe: { type: String, required: true },
  caracteristicaPrimaria: { type: String, required: true },
  tiradasSalvacion: { type: [String], required: true },
  competenciaArmasYArmadura: { type: String, required: true },
  lanzamientoDeConjuros: { type: Boolean, default: false }
});

const Clase = model('Clase', claseSchema);

export default Clase;