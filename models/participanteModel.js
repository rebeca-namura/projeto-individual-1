const db = require("../config/db")

class Participante {
  static async getAll() {
    const result = await db.query("SELECT * FROM participante")
    return result.rows
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM participante WHERE id = $1", [id])
    return result.rows[0]
  }

  static async create(data) {
    const result = await db.query(
      "INSERT INTO participante (nome, email, cpf, id_evento) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.nome, data.email, data.cpf, data.id_evento || null],
    )
    return result.rows[0]
  }

  static async update(id, data) {
    const result = await db.query(
      "UPDATE participante SET nome = $1, email = $2, cpf = $3, id_evento = $4 WHERE id = $5 RETURNING *",
      [data.nome, data.email, data.cpf, data.id_evento || null, id],
    )
    return result.rows[0]
  }

  static async delete(id) {
    const result = await db.query("DELETE FROM participante WHERE id = $1 RETURNING *", [id])
    return result.rowCount > 0
  }

  static async getByEvento(eventoId) {
    const result = await db.query("SELECT * FROM participante WHERE id_evento = $1", [eventoId])
    return result.rows
  }
}

module.exports = Participante
