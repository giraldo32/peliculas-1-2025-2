// Modelo para la colección media (películas y series)
const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  serial: {
    type: String,
    required: true,
    unique: true
  },
  titulo: {
    type: String,
    required: true
  },
  sinopsis: {
    type: String,
    default: null
  },
  url: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    default: null
  },
  anio_estreno: {
    type: Number,
    required: true
  },
  genero_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genero',
    required: true
  },
  director_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director',
    required: true
  },
  productora_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Productora',
    required: true
  },
  tipo_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tipo',
    required: true
  }
}, {
  timestamps: true // Esto añade createdAt y updatedAt automáticamente
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
