const programacaoModel = require("../models/programacaoModel")

const getAllProgramacoes = async (req, res) => {
  try {
    const programacoes = await programacaoModel.getAll()
    res.status(200).json(programacoes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProgramacaoById = async (req, res) => {
  try {
    const programacao = await programacaoModel.getById(req.params.id)
    if (programacao) {
      res.status(200).json(programacao)
    } else {
      res.status(404).json({ error: "Programação não encontrada" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProgramacoesByEvento = async (req, res) => {
  try {
    const programacoes = await programacaoModel.getByEvento(req.params.eventoId)
    res.status(200).json(programacoes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createProgramacao = async (req, res) => {
  try {
    const { data, descrição, id_evento } = req.body
    const newProgramacao = await programacaoModel.create({ data, descrição, id_evento })
    res.status(201).json(newProgramacao)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateProgramacao = async (req, res) => {
  try {
    const { data, descrição, id_evento } = req.body
    const updatedProgramacao = await programacaoModel.update(req.params.id, { data, descrição, id_evento })
    if (updatedProgramacao) {
      res.status(200).json(updatedProgramacao)
    } else {
      res.status(404).json({ error: "Programação não encontrada" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteProgramacao = async (req, res) => {
  try {
    const deletedProgramacao = await programacaoModel.delete(req.params.id)
    if (deletedProgramacao) {
      res.status(200).json({ message: "Programação deletada com sucesso" })
    } else {
      res.status(404).json({ error: "Programação não encontrada" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllProgramacoes,
  getProgramacaoById,
  getProgramacoesByEvento,
  createProgramacao,
  updateProgramacao,
  deleteProgramacao,
}
