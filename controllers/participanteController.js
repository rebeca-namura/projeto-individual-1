const participanteModel = require("../models/participanteModel")

const getAllParticipantes = async (req, res) => {
  try {
    const participantes = await participanteModel.getAll()
    res.status(200).json(participantes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getParticipanteById = async (req, res) => {
  try {
    const participante = await participanteModel.getById(req.params.id)
    if (participante) {
      res.status(200).json(participante)
    } else {
      res.status(404).json({ error: "Participante não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getParticipantesByEvento = async (req, res) => {
  try {
    const participantes = await participanteModel.getByEvento(req.params.eventoId)
    res.status(200).json(participantes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createParticipante = async (req, res) => {
  try {
    const { nome, email, cpf, id_evento } = req.body
    const newParticipante = await participanteModel.create({ nome, email, cpf, id_evento })
    res.status(201).json(newParticipante)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateParticipante = async (req, res) => {
  try {
    const { nome, email, cpf, id_evento } = req.body
    const updatedParticipante = await participanteModel.update(req.params.id, { nome, email, cpf, id_evento })
    if (updatedParticipante) {
      res.status(200).json(updatedParticipante)
    } else {
      res.status(404).json({ error: "Participante não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteParticipante = async (req, res) => {
  try {
    const deletedParticipante = await participanteModel.delete(req.params.id)
    if (deletedParticipante) {
      res.status(200).json({ message: "Participante deletado com sucesso" })
    } else {
      res.status(404).json({ error: "Participante não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllParticipantes,
  getParticipanteById,
  getParticipantesByEvento,
  createParticipante,
  updateParticipante,
  deleteParticipante,
}
