const quizData = [
    {
        question: "How many days do we have in a week?",
        a: "1",
        b: "4",
        c: "7",
        d: "9",
        correct: "c"
    }, {
        question: "What is the top color in the rainbow?",
        a: "Pink",
        b: "Blue",
        c: "Orange",
        d: "Red",
        correct: "d"
    }, {
        question: "How many weeks are there in one year?",
        a: "52",
        b: "54",
        c: "59",
        d: "60",
        correct: "a"
    }, {
        question: "Which is the nearest star to planet earth?",
        a: "Moon",
        b: "Sun",
        c: "Mars",
        d: "Mercury",
        correct: "b"
    }, {
        question: "Which is the fastest animal on land?",
        a: "Tiger",
        b: "Dog",
        c: "Elephant",
        d: "Cheetah",
        correct: "d"
    }
]

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("btn");
const quizContainer = document.getElementById("quizContainer");
const head = document.getElementById("head");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quizContainer.innerHTML = `<h2>Your score: ${(score/quizData.length)*100}%</h2>
            <h2>${score} of ${quizData.length} points</h2><button onclick="location.reload()">Restart</button>`;
            head.remove();
        }
    }
})