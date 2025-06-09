const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Entrar',
    contentPage: path.join(__dirname, '../views/pages/login'),
    useBackButton: false
  });
});

router.get('/login', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Início',
    contentPage: path.join(__dirname, '../views/pages/login'),
    useBackButton: false
  });
});

router.get('/home', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Início',
    contentPage: path.join(__dirname, '../views/pages/home'),
    useBackButton: false
  });
});



module.exports = router;