// controllers/userController.js

const eventoModel = require('../models/eventoModel');


const getEventoById = async (req, res) => {
  try {
    const evento = await eventoModel.getEventoById(req.params.id);
    if (evento) {
      res.status(200).json(evento);
    } else {
      res.status(404).json({ error: 'Eevnto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEvento = async (req, res) => {
  try {
    const { name } = req.body;
    const newEvento = await eventoModel.createEvento(name);
    res.status(201).json(newEvento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvento = async (req, res) => {
  try {
    const { name } = req.body;
    const updatedEvento = await eventoModel.updateAdm(req.params.id, name);
    if (updatedEvento) {
      res.status(200).json(updatedEvento);
    } else {
      res.status(404).json({ error: 'Evento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvento = async (req, res) => {
  try {
    const deletedEvento = await eventoModel.deleteEvento(req.params.id);
    if (deletedEvento) {
      res.status(200).json(deletedEvento);
    } else {
      res.status(404).json({ error: 'Evento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getEventoById,
  createEvento,
  updateEvento,
  deleteEvento
};
