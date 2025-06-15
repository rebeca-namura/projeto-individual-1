const db = require("../config/db")

class Evento {
  static async getAll() {
    const result = await db.query("SELECT * FROM evento")
    return result.rows
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM evento WHERE id = $1", [id])
    return result.rows[0]
  }

  static async create(data) {
    const result = await db.query(
      "INSERT INTO evento (data, id_programa, id_adm, id_participante) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.data, data.id_programa || null, data.id_adm || null, data.id_participante || null],
    )
    return result.rows[0]
  }

  static async update(id, data) {
    const result = await db.query(
      "UPDATE evento SET data = $1, id_programa = $2, id_adm = $3, id_participante = $4 WHERE id = $5 RETURNING *",
      [data.data, data.id_programa || null, data.id_adm || null, data.id_participante || null, id],
    )
    return result.rows[0]
  }

  static async delete(id) {
    const result = await db.query("DELETE FROM evento WHERE id = $1 RETURNING *", [id])
    return result.rowCount > 0
  }

  static async getEventoWithDetails(id) {
    const result = await db.query(
      `
      SELECT 
        e.*,
        a.nome as admin_nome,
        a.email as admin_email,
        p.nome as participante_nome,
        p.email as participante_email,
        pr.descrição as programacao_descricao
      FROM evento e
      LEFT JOIN administrador a ON e.id_adm = a.id
      LEFT JOIN participante p ON e.id_participante = p.id
      LEFT JOIN programação pr ON e.id_programa = pr.id
      WHERE e.id = $1
    `,
      [id],
    )
    return result.rows[0]
  }
}

module.exports = Evento
