var express = require("express");
var router = express.Router();

var QuizController = require("../controllers/QuizController");

//Recebendo os dados do html e direcionando para a função cadastrar de QuizController.js
router.post("/CadastrarQuiz", function (req, res) {
    QuizController.CadastrarQuiz(req, res);
})

module.exports = router;