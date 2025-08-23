// Controlador para el módulo de tipo
const Tipo = require('../models/tipo');

const tipoController = {
  async getAll(req, res) {
    const tipos = await Tipo.getAll();
    res.json(tipos);
  },
  async getById(req, res) {
    const tipo = await Tipo.getById(req.params.id);
    if (!tipo) return res.status(404).json({ error: 'No encontrado' });
    res.json(tipo);
  },
  async create(req, res) {
    const nuevo = await Tipo.create(req.body);
    res.status(201).json(nuevo);
  },
  async update(req, res) {
    const actualizado = await Tipo.update(req.params.id, req.body);
    res.json(actualizado);
  },
  async delete(req, res) {
    await Tipo.delete(req.params.id);
    res.json({ eliminado: true });
  }
};

module.exports = tipoController;
