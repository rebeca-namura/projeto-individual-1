// controllers/userController.js

const userModel = require('../models/admModel');

const getAdmById = async (req, res) => {
  try {
    const adm = await userModel.getAdmById(req.params.id);
    if (adm) {
      res.status(200).json(adm);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAdm = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newAdm = await userModel.createAdm(name, email);
    res.status(201).json(newAdm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdm = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedAdm = await userModel.updateAdm(req.params.id, name, email);
    if (updatedAdm) {
      res.status(200).json(updatedAdm);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAdm = async (req, res) => {
  try {
    const deletedAdm = await userModel.deleteAdm(req.params.id);
    if (deletedAdm) {
      res.status(200).json(deletedAdm);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAdms,
  getAdmById,
  createAdm,
  updateAdm,
  deleteAdm
};
