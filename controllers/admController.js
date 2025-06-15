const admModel = require("../models/admModel")

const getAllAdms = async (req, res) => {
  try {
    const adms = await admModel.getAll()
    res.status(200).json(adms)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAdmById = async (req, res) => {
  try {
    const adm = await admModel.getById(req.params.id)
    if (adm) {
      res.status(200).json(adm)
    } else {
      res.status(404).json({ error: "Administrador não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createAdm = async (req, res) => {
  try {
    const { nome, email, id_evento } = req.body
    const newAdm = await admModel.create({ nome, email, id_evento })
    res.status(201).json(newAdm)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateAdm = async (req, res) => {
  try {
    const { nome, email, id_evento } = req.body
    const updatedAdm = await admModel.update(req.params.id, { nome, email, id_evento })
    if (updatedAdm) {
      res.status(200).json(updatedAdm)
    } else {
      res.status(404).json({ error: "Administrador não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteAdm = async (req, res) => {
  try {
    const deletedAdm = await admModel.delete(req.params.id)
    if (deletedAdm) {
      res.status(200).json({ message: "Administrador deletado com sucesso" })
    } else {
      res.status(404).json({ error: "Administrador não encontrado" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllAdms,
  getAdmById,
  createAdm,
  updateAdm,
  deleteAdm,
}
