const db = require('../config/db');

class programacao {


  static async create(data) {
    const result = await db.query(
      'INSERT INTO programação (descrição) VALUES ($1, $2) RETURNING *',
      [data.description]
    );
    return result.rows[0];
  }

  static async update(id) {
    const result = await db.query(
      'UPDATE programação SET descrição = $1 WHERE id = $2 RETURNING *',
      [data.description, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM programação WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = programacao;
