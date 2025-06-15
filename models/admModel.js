const db = require("../config/db")

class Adm {
  static async getAll() {
    const result = await db.query("SELECT * FROM administrador")
    return result.rows
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM administrador WHERE id = $1", [id])
    return result.rows[0]
  }

  static async findByEmail(email) {
    const result = await db.query("SELECT * FROM administrador WHERE email = $1", [email])
    return result.rows[0]
  }

  static async create(data) {
    const result = await db.query(
      "INSERT INTO administrador (nome, email, id_evento) VALUES ($1, $2, $3) RETURNING *",
      [data.nome, data.email, data.id_evento || null],
    )
    return result.rows[0]
  }

  static async update(id, data) {
    const result = await db.query(
      "UPDATE administrador SET nome = $1, email = $2, id_evento = $3 WHERE id = $4 RETURNING *",
      [data.nome, data.email, data.id_evento || null, id],
    )
    return result.rows[0]
  }

  static async delete(id) {
    const result = await db.query("DELETE FROM administrador WHERE id = $1 RETURNING *", [id])
    return result.rowCount > 0
  }
}

module.exports = Adm
