const question = document.querySelector(".question");
  const answers = document.querySelector(".answers");
  const spnQtd = document.querySelector(".spnQtd");
  const textFinish = document.querySelector(".finish span");
  const content = document.querySelector(".content");
  const contentFinish = document.querySelector(".finish");
  const btnRestart = document.querySelector(".finish button");


  import questions from "./questions.js"; 

  let currentIndex = 0;
  let questionsCorrect = 0;

// Função para reiniciar o quiz
  btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    
    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
  };

  // Função para carregar a próxima questão
  function nextQuestion(e){
    
    if(e.target.getAttribute("data-correct") === "true") {
      questionsCorrect++;
    }
    
    if(currentIndex < questions.length - 1){
      currentIndex++;
      loadQuestion();
    } else {
      finish();
    }
  }

// função para finalizar o quiz
  function finish() {

    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
    
      CadastrarQuiz();
    }
    
    // Função para carregar a próxima questão
    function loadQuestion(){
      
      // Atualiza o contador de pergunta
      spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;

      // obtem a pergunta atual
      const item = questions[currentIndex];

      answers.innerHTML = "";

      // Escreve o texto da questão
      question.innerHTML = item.question;
      
      // Criação de botão para cada questão
      item.answers.forEach((answer) => {
          const div = document.createElement("div");
          
          div.innerHTML = `
          <button class="answer" data-correct="${answer.correct}">
          ${answer.option}
          </button>
          `;
          
          answers.appendChild(div);
          
        });
        
        // Chamando a próxima questão através de um evento
        document.querySelectorAll(".answer").forEach((item) => {
          item.addEventListener("click", nextQuestion);
        });
      }

      
      loadQuestion();
      
      function CadastrarQuiz(){

        var idUsuarioVar = sessionStorage.ID_USUARIO;
        console.log(idUsuarioVar)
        
        var alternativaCorretaVar = questionsCorrect;
        var questoesVar = questions.length;

        fetch("/Quiz/CadastrarQuiz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            questoesServer: questoesVar,
            alternativaCorretaServer: alternativaCorretaVar,
            idUsuarioServer: idUsuarioVar
          }),
        })
          .then(function (resposta) {
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
            
              // cardErro.style.display = "block";
    
              // mensagem_erro.innerHTML =
              //   "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
    
              // setTimeout(() => {
              //   window.location = "login.html";
              // }, "2000");
    
              // limparFormulario();
            } else {
              throw "Houve um erro ao tentar cadastrar no quiz!";
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          //   finalizarAguardar();
          });
          return false;
    
      }

      