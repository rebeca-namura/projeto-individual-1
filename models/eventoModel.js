const db = require('../config/db');

class evento {

  static async getById(id) {
    const result = await db.query('SELECT * FROM evento WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO evento (nome) VALUES ($1, $2) RETURNING *',
      [data.name]
    );
    return result.rows[0];
  }

  static async update(id) {
    const result = await db.query(
      'UPDATE evento SET nome = $1  WHERE id = $2 RETURNING *',
      [data.name, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM evento WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = evento;
