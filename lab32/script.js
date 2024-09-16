const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: [
            "Buenos Aires",
            "Brasília",
            "Santiago",
            "Lima"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        answers: [
            "Marte",
            "Saturno",
            "Júpiter",
            "Urano"
        ],
        correctAnswer: 2
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        answers: [
            "José de Alencar",
            "Machado de Assis",
            "Jorge Amado",
            "Guimarães Rosa"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o elemento químico com símbolo O?",
        answers: [
            "Ouro",
            "Oxigênio",
            "Ósmio",
            "Ouro"
        ],
        correctAnswer: 1
    },
    {
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        answers: [
            "1965",
            "1969",
            "1972",
            "1978"
        ],
        correctAnswer: 1
    }
];


function loadQuiz() {
    const quizContainer = document.getElementById('question-container');
    let quizContent = '';

    questions.forEach((question, index) => {
        quizContent += `
            <div class="question">
                <h3>${index + 1}. ${question.question}</h3>
                <ul class="options">
                    ${question.answers.map((answer, i) => `
                        <li>
                            <input type="radio" name="q${index}" value="${i}">
                            ${answer}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });

    quizContainer.innerHTML = quizContent;
    // Certifique-se de que o resultado está escondido ao carregar o quiz
    document.getElementById('result').style.display = 'none';
}

function checkAnswers() {
    let score = 0;
    const results = [];
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        const correct = parseInt(selectedAnswer?.value) === question.correctAnswer;
        results.push({
            question: question.question,
            selected: selectedAnswer ? question.answers[parseInt(selectedAnswer.value)] : "Nenhuma resposta",
            correct: question.answers[question.correctAnswer],
            isCorrect: correct
        });
        if (correct) score++;
    });
    return { score, results };
}

function submitAnswers() {
    const { score, results } = checkAnswers();
    const resultContainer = document.getElementById('result');
    
    let resultHTML = `<h2>Você acertou ${score} de ${questions.length}!</h2>`;
    
    results.forEach((result, index) => {
        resultHTML += `
            <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                <h3>${index + 1}. ${result.question}</h3>
                <p><strong>Sua resposta:</strong> ${result.selected}</p>
                <p><strong>Resposta correta:</strong> ${result.correct}</p>
            </div>
        `;
    });
    
    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = 'block';
}

function resetQuiz() {
    // Limpar respostas selecionadas
    clearQuizState();
    
    // Recarregar o quiz para seu estado inicial
    loadQuiz();
}

function clearQuizState() {
    // Limpar respostas selecionadas
    const options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.checked = false);

    // Limpar resultados
    document.getElementById('result').textContent = '';
    document.getElementById('result').style.display = 'none'; // Esconder o resultado
}

// Adicionar o listener para o botão de reinício
document.getElementById('reset-button').addEventListener('click', resetQuiz);

// Carregar o quiz assim que a página carregar
document.addEventListener('DOMContentLoaded', loadQuiz);