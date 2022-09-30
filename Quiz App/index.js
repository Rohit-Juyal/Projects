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
            <div class="img">${score < 2 ? `<img src="https://lh3.googleusercontent.com/afQ11KK08HfvsieiziKT6I7std2A908qUu-qpJM3Bt3YD_9JBpMeNtMffFiVhecoxjgIkYZkJutDZ7g1fxbkpTRS02x5XFLV8Ojzx5tgo-Httr-M6IAY3LezOZZvPACyCXiY3XWmFpFOO6gbKW77h6eYJ7CSz-Xe2bL0kH-mjdPGIkwj7kEmfZe8IG0Iuy4kPH3dUMcsLMM6-04VfrqMorTFCf1ln4tMyK12d-c_x3Qc5OHSSC1KERd8wAR3c6-W7poujUFI64urkPViGJvxpO-GtW-9BBNkHA72DweXZ9XqUynDxwUzd1jEwVjdVl0mWkTW6XQfZiKsIdIiRuyqqflDIEv94nOMnXyudMgrC43G1AkDVQyfTEE7k89IoxAOJ-OfH2Gh-9Vv2TH-Z_FL-WGYInj1KjZ3VjdODqaxtO-aNO4Zxn4QWCC4bXF0ySz76lCPrTew5n3nPKUBEDkM60TppgRR2lEm8kUwDyKjlAMaQpeSiygueiV14aMej4WhUSWcIQA6OUArVlQ_3n7LjF_OkLmCssCn3cdGyjv4Vf7jV3Bgof8TFJ_W_oWI8fSo8ZjcCwvmSLAE3Z-BqJD4_AkqD5m62H99zXhs1H7WfGKthHsesFD3ypIR1cIUYN1x5BfWnarf7ZDnSfXwv_-EZkS0L86tKaZNei4o17Z8w8dj-WgR0rgsFTpCt91JTl5s1xxyYjBXZ-whYlrH_B0WH3a7F37Xl0k3Kcr5pMXEp5OIqGEbDyyrIyjwjMcWwynkyImm69S3wauSa1TS-OA6BdOTvKwP5ieC9VBzVaXN9eNcrXMs_pvEMD9aRiTwpsL47TFZ=s270-no?authuser=0" alt=""></img>` : `<img src ="https://lh3.googleusercontent.com/tNl983r2xD4RkGoVDzFNdxhsz66ZVSifQujezKD3oEX5Q1L8mMg1lpS_XcTzrOF82F3hCv3egLS68q0SFlv_r1PiNr4Ti55pj1je6HHwScZHWgMdLpEV_tnxjA0NdLgPOCT7P8PNExGTWfdaKQGdWBSMQjRon23IYSZGxgcJ28LiX-JAu0E57SDCySWqL6ngEhFSXIDzz4V2wTlknUaGXm0qxukHNkHbymfU8Y3rAY3JUKEjalqIBQ89VmeRnVAn96tHe_0fjI_TAn8cvvKb6MZsC_-QHzVvf8BlCygw9RkXGgAgm5FAfwOse1pJ_M47kcOsEg2w48KwgonAr2pBXHKxs4m-wsCk_4Ag36BXzJ9b7ZLcvI1k2zcKSJPjB-xFB5oOPh3_vvEnqjFB8Pf9H0M73TkGGGPEH1ksa4lKVjF-I4Oq1AWbR9FfHgnL2PnYvMFUG0IBnaT2ok2StAFs1_V0sIb37jJz_tfxFcPsSnuAqcx2GZMxxuCwREs1I-4loF0zihwzxFSribBK7Ly7PisbXn_q3_uh8_i8pN98wCBVcJxCr-2bcWuSxK7XBw2MYok3efbunLNsPCQUDm4_o2U5HSLBWzoOvk3guO2xMp4M2LLD13FNsu2h9FQ5Dm6M-zX0zRQNTTiQl_fW2A5RC9GprNozgg_9xd5paFmI98CaMspTj7zD5ExsEcnpw6w9l8tk2bJmhKTV9HsnXDQ9HQk24fBYXn-5iHqE9dKZezDvcar7_hEcU7hA8WZSeSo7w_JWiZhvA4s4PuA3SL9tqn2uNYr4d07Uyu6qOaUqDLWLFWgSI-MaZPl0RmFm4cJtaeNiUq9ToI2HgUYzVjaFHkMClQE7PFNbiIm1uB8ixvM-VShUXDOoyQMKw5qAejpoQwvQlH3h1Tf76gSTuklbjtWuLDyFmM-hbriRzfZfRhIrN7Ak0LLGtwC6Z1vfGqbSpVeruuMUG5qVthH-43xCESi1awbZVMIF1AbxrVwO3OtfOLg=w648-h863-no?authuser=0" ></img>`}</div>
            <h2>${score} of ${quizData.length} points</h2><button onclick="location.reload()">Restart</button>`;
            head.remove();
        }
    }
})