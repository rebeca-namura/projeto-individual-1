const db = require("../config/db")

class Programacao {
  static async getAll() {
    const result = await db.query("SELECT * FROM programação")
    return result.rows
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM programação WHERE id = $1", [id])
    return result.rows[0]
  }

  static async create(data) {
    const result = await db.query(
      "INSERT INTO programação (data, descrição, id_evento) VALUES ($1, $2, $3) RETURNING *",
      [data.data, data.descrição, data.id_evento || null],
    )
    return result.rows[0]
  }

  static async update(id, data) {
    const result = await db.query(
      "UPDATE programação SET data = $1, descrição = $2, id_evento = $3 WHERE id = $4 RETURNING *",
      [data.data, data.descrição, data.id_evento || null, id],
    )
    return result.rows[0]
  }

  static async delete(id) {
    const result = await db.query("DELETE FROM programação WHERE id = $1 RETURNING *", [id])
    return result.rowCount > 0
  }

  static async getByEvento(eventoId) {
    const result = await db.query("SELECT * FROM programação WHERE id_evento = $1", [eventoId])
    return result.rows
  }
}

module.exports = Programacao
