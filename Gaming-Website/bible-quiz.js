// Array mit Fragen und Antworten
const questions = [
    {
        question: "Was ist die erste Zeile der Bibel?",
        options: [
            "Im Anfang schuf Gott Himmel und Erde",
            "Jesus weinte",
            "Mose ging auf den Berg Sinai",
            "Abraham opferte Isaak"
        ],
        answer: "Im Anfang schuf Gott Himmel und Erde"
    },
    {
        question: "Was ist die Hauptbotschaft der zehn Gebote?",
        options: [
            "Liebe deinen Nächsten wie dich selbst",
            "Du sollst nicht töten",
            "Du sollst keine anderen Götter haben neben mir",
            "Du sollst den Sabbat heiligen"
        ],
        answer: "Du sollst keine anderen Götter haben neben mir"
    },
    {
        question: "Wer war der erste König Israels?",
        options: [
            "David",
            "Saul",
            "Salomo",
            "Samuel"
        ],
        answer: "Saul"
    },
    {
        question: "Welche Person wurde in die Löwengrube geworfen?",
        options: [
            "Jeremia",
            "Daniel",
            "Ezechiel",
            "Jesaja"
        ],
        answer: "Daniel"
    },
    {
        question: "Wie viele Tage dauerte die Sintflut?",
        options: [
            "40 Tage und 40 Nächte",
            "7 Tage und 7 Nächte",
            "120 Tage",
            "12 Monate"
        ],
        answer: "40 Tage und 40 Nächte"
    }
];



let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQ = questions[currentQuestion];

    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = '';

    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQ = questions[currentQuestion];
    if (selectedAnswer === currentQ.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
    checkProgress();
}

// ... (Vorheriger Code bleibt unverändert)

function showResult() {
    const correctAnswers = score;
    const incorrectAnswers = questions.length - score;

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Richtig', 'Falsch'],
            datasets: [{
                label: 'Ergebnis',
                data: [correctAnswers, incorrectAnswers],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Richtige und Falsche Antworten',
                },
            },
        },
    });

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Du hast ${score} von ${questions.length} Fragen richtig beantwortet.`;

    document.getElementById('chart-container').style.display = 'block';
}

// ... (Rest des Codes bleibt unverändert)


function checkProgress() {
    if (currentQuestion === questions.length) {
        const checkButton = document.getElementById('check-answers');
        checkButton.style.display = 'block';
        checkButton.addEventListener('click', showResult);
    }
}

// Starte das Quiz, indem die erste Frage geladen wird
window.onload = loadQuestion;
