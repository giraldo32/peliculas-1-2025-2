// Modelo para la tabla productora
const db = require('../db');

const Productora = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM productora');
    return rows;
  },
  async getById(id) {
    const [rows] = await db.query('SELECT * FROM productora WHERE id = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { nombre, estado, slogan, descripcion } = data;
    const [result] = await db.query(
      'INSERT INTO productora (nombre, estado, slogan, descripcion) VALUES (?, ?, ?, ?)',
      [nombre, estado || 'Activo', slogan || null, descripcion || null]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { nombre, estado, slogan, descripcion } = data;
    await db.query(
      'UPDATE productora SET nombre=?, estado=?, slogan=?, descripcion=?, fecha_actualizacion=NOW() WHERE id=?',
      [nombre, estado, slogan, descripcion, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await db.query('DELETE FROM productora WHERE id=?', [id]);
    return { id };
  }
};

module.exports = Productora;
