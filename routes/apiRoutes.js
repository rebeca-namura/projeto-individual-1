const express = require('express');
const apiRoutes = express.Router();

const authRoutes = require('./authRoutes');
const admRoutes = require('./admRoutes');
const eventoRoutes = require('./eventoRoutes'); 
const participanteRoutes = require('./participanteRoutes'); 
const programacaoRoutes = require('./programacaoRoutes'); 

apiRoutes.use('/login', authRoutes);
apiRoutes.use('/adm', admRoutes);
apiRoutes.use('/evento', eventoRoutes);
apiRoutes.use('/participante', participanteRoutes);
apiRoutes.use('/programacao', programacaoRoutes);


module.exports = apiRoutes;