const express = require("express")
const router = express.Router()
const programacaoController = require("../controllers/programacaoController")

router.get("/", programacaoController.getAllProgramacoes)
router.get("/:id", programacaoController.getProgramacaoById)
router.get("/evento/:eventoId", programacaoController.getProgramacoesByEvento)
router.post("/", programacaoController.createProgramacao)
router.put("/:id", programacaoController.updateProgramacao)
router.delete("/:id", programacaoController.deleteProgramacao)

module.exports = router
