const eventoModel = require("../models/eventoModel")

const getAllEventos = async (req, res) => {
  try {
    const eventos = await eventoModel.getAll()
    res.status(200).json(eventos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEventoById = async (req, res) => {
  try {
    const evento = await eventoModel.getById(req.params.id)
    if (evento) {
      res.status(200).json(evento)
    } else {
      res.status(404).json({ error: "Evento não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEventoWithDetails = async (req, res) => {
  try {
    const evento = await eventoModel.getEventoWithDetails(req.params.id)
    if (evento) {
      res.status(200).json(evento)
    } else {
      res.status(404).json({ error: "Evento não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createEvento = async (req, res) => {
  try {
    const { data, id_programa, id_adm, id_participante } = req.body
    const newEvento = await eventoModel.create({ data, id_programa, id_adm, id_participante })
    res.status(201).json(newEvento)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateEvento = async (req, res) => {
  try {
    const { data, id_programa, id_adm, id_participante } = req.body
    const updatedEvento = await eventoModel.update(req.params.id, { data, id_programa, id_adm, id_participante })
    if (updatedEvento) {
      res.status(200).json(updatedEvento)
    } else {
      res.status(404).json({ error: "Evento não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteEvento = async (req, res) => {
  try {
    const deletedEvento = await eventoModel.delete(req.params.id)
    if (deletedEvento) {
      res.status(200).json({ message: "Evento deletado com sucesso" })
    } else {
      res.status(404).json({ error: "Evento não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllEventos,
  getEventoById,
  getEventoWithDetails,
  createEvento,
  updateEvento,
  deleteEvento,
}
