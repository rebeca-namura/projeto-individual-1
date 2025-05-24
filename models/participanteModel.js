const db = require('../config/db');

class participante {
  static async getAll() {
    const result = await db.query('SELECT * FROM participante');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM participante WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO participante (nome, email) VALUES ($1, $2) RETURNING *',
      [data.name, data.email]
    );
    return result.rows[0];
  }

  static async update(id) {
    const result = await db.query(
      'UPDATE participante SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
      [data.name, data.email, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM participante WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = participante;
