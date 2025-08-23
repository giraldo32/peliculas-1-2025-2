// Modelo para la tabla genero
const db = require('../db');

const Genero = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM genero');
    return rows;
  },
  async getById(id) {
    const [rows] = await db.query('SELECT * FROM genero WHERE id = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { nombre, estado, descripcion } = data;
    const [result] = await db.query(
      'INSERT INTO genero (nombre, estado, descripcion) VALUES (?, ?, ?)',
      [nombre, estado || 'Activo', descripcion || null]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { nombre, estado, descripcion } = data;
    await db.query(
      'UPDATE genero SET nombre=?, estado=?, descripcion=?, fecha_actualizacion=NOW() WHERE id=?',
      [nombre, estado, descripcion, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await db.query('DELETE FROM genero WHERE id=?', [id]);
    return { id };
  }
};

module.exports = Genero;
