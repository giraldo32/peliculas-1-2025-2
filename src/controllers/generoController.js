// Controlador para el módulo de género
const Genero = require('../models/genero');

const generoController = {
  async getAll(req, res) {
    const generos = await Genero.getAll();
    res.json(generos);
  },
  async getById(req, res) {
    const genero = await Genero.getById(req.params.id);
    if (!genero) return res.status(404).json({ error: 'No encontrado' });
    res.json(genero);
  },
  async create(req, res) {
    const nuevo = await Genero.create(req.body);
    res.status(201).json(nuevo);
  },
  async update(req, res) {
    const actualizado = await Genero.update(req.params.id, req.body);
    res.json(actualizado);
  },
  async delete(req, res) {
    await Genero.delete(req.params.id);
    res.json({ eliminado: true });
  }
};

module.exports = generoController;
