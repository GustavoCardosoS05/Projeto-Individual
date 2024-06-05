var QuizModel = require("../models/QuizModel");


function CadastrarQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo Quiz.html
    var alternativaCorreta = req.body.alternativaCorretaServer;
    var questoes = req.body.questoesServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (alternativaCorreta == undefined) {
        res.status(400).send("Seu alternativa está undefined!");
        console.log('alternativaCorreta')
    } else if (questoes == undefined) {
        res.status(400).send("Seu questao está undefined!");
        console.log('questoes')
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua fk está undefined!");
        console.log('idUsuario')
    } else {

        // Passe os valores como parâmetro e vá para o arquivo QuizModel.js
        QuizModel.CadastrarQuiz(alternativaCorreta, questoes, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    CadastrarQuiz
}