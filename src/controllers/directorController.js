// Controlador para el módulo de director
const Director = require('../models/director');

const directorController = {
  async getAll(req, res) {
    const directores = await Director.getAll();
    res.json(directores);
  },
  async getById(req, res) {
    const director = await Director.getById(req.params.id);
    if (!director) return res.status(404).json({ error: 'No encontrado' });
    res.json(director);
  },
  async create(req, res) {
    const nuevo = await Director.create(req.body);
    res.status(201).json(nuevo);
  },
  async update(req, res) {
    const actualizado = await Director.update(req.params.id, req.body);
    res.json(actualizado);
  },
  async delete(req, res) {
    await Director.delete(req.params.id);
    res.json({ eliminado: true });
  }
};

module.exports = directorController;
