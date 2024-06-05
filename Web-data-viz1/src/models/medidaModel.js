var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT Round((sum(alternativaCorreta)/sum(questoes))*100) as Porcentagem,
    Quiz.alternativaCorreta,
    Quiz.questoes
        from Quiz where fkLogin = ${idUsuario}
            group by alternativaCorreta,questoes
            order by alternativaCorreta,questoes;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT round((sum(alternativaCorreta)/sum(questoes))*100)
        from Quiz where fkLogin = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
