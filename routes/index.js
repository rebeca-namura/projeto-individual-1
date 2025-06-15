const express = require("express")
const path = require("path")
const router = express.Router()

// Import controllers directly
const admController = require("../controllers/admController")
const eventoController = require("../controllers/eventoController")
const participanteController = require("../controllers/participanteController")
const programacaoController = require("../controllers/programacaoController")
const testController = require("../controllers/testController")

// Test routes
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Routes are working!",
    timestamp: new Date().toISOString(),
  })
})

router.get("/test-connection", testController.testConnection)

// Data routes
router.get("/adm", admController.getAllAdms)
router.get("/evento", eventoController.getAllEventos)
router.get("/participante", participanteController.getAllParticipantes)
router.get("/programacao", programacaoController.getAllProgramacoes)

// Page routes
router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Entrar",
    contentPage: path.join(__dirname, "../views/pages/login"),
    useBackButton: false,
  })
})

router.get("/login", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Início",
    contentPage: path.join(__dirname, "../views/pages/login"),
    useBackButton: false,
  })
})

router.get("/home", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Início",
    contentPage: path.join(__dirname, "../views/pages/home"),
    useBackButton: false,
  })
})

router.get("/database-test", (req, res) => {
  res.render(path.join(__dirname, "../views/pages/database-test"))
})

router.get("/system-test", (req, res) => {
  res.render(path.join(__dirname, "../views/pages/system-test"))
})

router.get("/index", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Início",
    contentPage: path.join(__dirname, "../views/pages/index"),
    useBackButton: false,
  })
})

router.get("/read", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Início",
    contentPage: path.join(__dirname, "../views/pages/read-event"),
    useBackButton: false,
  })
})

router.get("/events", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Início",
    contentPage: path.join(__dirname, "../views/pages/events"),
    useBackButton: false,
  })
})
module.exports = router
