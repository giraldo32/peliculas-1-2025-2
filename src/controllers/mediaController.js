// Controlador para el módulo de media (películas y series)
const Media = require('../models/media');

const mediaController = {
  async getAll(req, res) {
    const medias = await Media.getAll();
    res.json(medias);
  },
  async getById(req, res) {
    const media = await Media.getById(req.params.id);
    if (!media) return res.status(404).json({ error: 'No encontrado' });
    res.json(media);
  },
  async create(req, res) {
    const nuevo = await Media.create(req.body);
    res.status(201).json(nuevo);
  },
  async update(req, res) {
    const actualizado = await Media.update(req.params.id, req.body);
    res.json(actualizado);
  },
  async delete(req, res) {
    await Media.delete(req.params.id);
    res.json({ eliminado: true });
  }
};

module.exports = mediaController;
