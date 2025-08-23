// Modelo para la tabla director
const db = require('../db');

const Director = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM director');
    return rows;
  },
  async getById(id) {
    const [rows] = await db.query('SELECT * FROM director WHERE id = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { nombres, estado } = data;
    const [result] = await db.query(
      'INSERT INTO director (nombres, estado) VALUES (?, ?)',
      [nombres, estado || 'Activo']
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { nombres, estado } = data;
    await db.query(
      'UPDATE director SET nombres=?, estado=?, fecha_actualizacion=NOW() WHERE id=?',
      [nombres, estado, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await db.query('DELETE FROM director WHERE id=?', [id]);
    return { id };
  }
};

module.exports = Director;
