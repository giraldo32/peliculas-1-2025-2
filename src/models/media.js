// Modelo para la tabla media (películas y series)
const db = require('../db');

const Media = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM media');
    return rows;
  },
  async getById(id) {
    const [rows] = await db.query('SELECT * FROM media WHERE id = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { serial, titulo, sinopsis, url, imagen, anio_estreno, genero_id, director_id, productora_id, tipo_id } = data;
    const [result] = await db.query(
      'INSERT INTO media (serial, titulo, sinopsis, url, imagen, anio_estreno, genero_id, director_id, productora_id, tipo_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [serial, titulo, sinopsis || null, url, imagen || null, anio_estreno, genero_id, director_id, productora_id, tipo_id]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { serial, titulo, sinopsis, url, imagen, anio_estreno, genero_id, director_id, productora_id, tipo_id } = data;
    await db.query(
      'UPDATE media SET serial=?, titulo=?, sinopsis=?, url=?, imagen=?, anio_estreno=?, genero_id=?, director_id=?, productora_id=?, tipo_id=?, fecha_actualizacion=NOW() WHERE id=?',
      [serial, titulo, sinopsis, url, imagen, anio_estreno, genero_id, director_id, productora_id, tipo_id, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await db.query('DELETE FROM media WHERE id=?', [id]);
    return { id };
  }
};

module.exports = Media;
