// controllers/userController.js

const programacaoModel = require('../models/programacaoModel');


const createProgramacao = async (req, res) => {
  try {
    const { description } = req.body;
    const newProgramacao = await programacaoModel.createProgramacao(description);
    res.status(201).json(newProgramacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProgramacao = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedProgramacao = await programacaoModel.updateProgramacao(req.params.id, description);
    if (updatedProgramacao) {
      res.status(200).json(updatedProgramacao);
    } else {
      res.status(404).json({ error: 'Programação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProgramacao = async (req, res) => {
  try {
    const deletedProgramacao = await programacaoModel.deleteProgramacao(req.params.id);
    if (deletedProgramacao) {
      res.status(200).json(deletedProgramacao);
    } else {
      res.status(404).json({ error: 'Programação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProgramacao,
  updateProgramacao,
  deleteProgramacao
};
