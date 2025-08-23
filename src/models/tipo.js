// Modelo para la tabla tipo
const db = require('../db');

const Tipo = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM tipo');
    return rows;
  },
  async getById(id) {
    const [rows] = await db.query('SELECT * FROM tipo WHERE id = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { nombre, descripcion } = data;
    const [result] = await db.query(
      'INSERT INTO tipo (nombre, descripcion) VALUES (?, ?)',
      [nombre, descripcion || null]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { nombre, descripcion } = data;
    await db.query(
      'UPDATE tipo SET nombre=?, descripcion=?, fecha_actualizacion=NOW() WHERE id=?',
      [nombre, descripcion, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await db.query('DELETE FROM tipo WHERE id=?', [id]);
    return { id };
  }
};

module.exports = Tipo;
