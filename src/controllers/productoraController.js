// Controlador para el módulo de productora
const Productora = require('../models/productora');

const productoraController = {
  async getAll(req, res) {
    const productoras = await Productora.getAll();
    res.json(productoras);
  },
  async getById(req, res) {
    const productora = await Productora.getById(req.params.id);
    if (!productora) return res.status(404).json({ error: 'No encontrado' });
    res.json(productora);
  },
  async create(req, res) {
    const nuevo = await Productora.create(req.body);
    res.status(201).json(nuevo);
  },
  async update(req, res) {
    const actualizado = await Productora.update(req.params.id, req.body);
    res.json(actualizado);
  },
  async delete(req, res) {
    await Productora.delete(req.params.id);
    res.json({ eliminado: true });
  }
};

module.exports = productoraController;
