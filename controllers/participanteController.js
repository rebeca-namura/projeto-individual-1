// controllers/userController.js

const participanteModel = require('../models/participanteModel');

const getAllParticipantes = async (req, res) => {
  try {
    const participantes = await participanteModel.getAllParticipantes();
    res.status(200).json(participantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getParticipanteById = async (req, res) => {
  try {
    const participante = await participanteModel.getParticipanteById(req.params.id);
    if (participante) {
      res.status(200).json(adm);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createParticipante = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newParticipante = await participanteModel.createParticipante(name, email);
    res.status(201).json(newParticipante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateParticipante = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedParticipante = await participanteModel.updateParticipante(req.params.id, name, email);
    if (updatedParticipante) {
      res.status(200).json(updatedParticipante);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteParticipante = async (req, res) => {
  try {
    const deletedParticipante = await participanteModel.deleteParticipante(req.params.id);
    if (deletedParticipante) {
      res.status(200).json(deletedParticipante);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllParticipantes,
  getParticipanteById,
  createParticipante,
  updateParticipante,
  deleteParticipante
};
