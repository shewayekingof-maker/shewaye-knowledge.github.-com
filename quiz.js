 const questions = [
    {
        question: "የኢትዮጵያ ዋና ከተማ ማን ናት?",
        answers: [
            "አዲስ አበባ",
            "ጅማ",
            "ደሴ",
            "ባህር ዳር"
        ],
        correct: 0,
        category: "ጂኦግራፊ"
    },

    {
        question: "ፀሐይ ምንድን ናት?",
        answers: [
            "ፕላኔት",
            "ኮከብ",
            "ጨረቃ",
            "አስትሮይድ"
        ],
        correct: 1,
        category: "ሳይንስ"
    },

    {
        question: "ውሃ በመደበኛ የከባቢ አየር ግፊት በስንት ዲግሪ ሴልሺየስ ይፈላል?",
        answers: [
            "50°C",
            "75°C",
            "100°C",
            "150°C"
        ],
        correct: 2,
        category: "ሳይንስ"
    },

    {
        question: "የምድር ተፈጥሯዊ ሳተላይት ማን ነው?",
        answers: [
            "ፀሐይ",
            "ማርስ",
            "ጨረቃ",
            "ቬኑስ"
        ],
        correct: 2,
        category: "ሳይንስ"
    },

    {
        question: "በእንግሊዝኛ ፊደላት ስንት ፊደላት አሉ?",
        answers: [
            "20",
            "24",
            "26",
            "30"
        ],
        correct: 2,
        category: "ትምህርት"
    }
];

// እዚህ ላይ ቀጥሎ 500 ጥያቄዎች ይጨመራሉ።

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const questionNumber = document.getElementById("question-number");
const progressBar = document.getElementById("progress-bar");
const categoryElement = document.getElementById("category");

function showQuestion() {

    answered = false;

    const q = questions[currentQuestion];

    questionElement.textContent = q.question;
    categoryElement.textContent = q.category;

    questionNumber.textContent =
        ጥያቄ ${currentQuestion + 1} / ${questions.length};

    scoreElement.textContent =
        ነጥብ: ${score};

    progressBar.style.width =
        ${((currentQuestion + 1) / questions.length) * 100}%;

    answersElement.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = answer;

        button.onclick = () => selectAnswer(index, button);

        answersElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function selectAnswer(index, button) {

    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];
    const allButtons = document.querySelectorAll(".answer-btn");

    if (index === q.correct) {

        button.classList.add("correct");
        score++;

    } else {

        button.classList.add("wrong");
        allButtons[q.correct].classList.add("correct");
    }

    scoreElement.textContent =
        ነጥብ: ${score};

    nextButton.style.display = "block";
}

nextButton.onclick = () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();
    }
};

function finishQuiz() {

    document.querySelector(".quiz-container")
        .classList.add("hidden");

    document.getElementById("result")
        .classList.remove("hidden");

    document.getElementById("final-score").textContent =
        ${score} / ${questions.length};

    let message = "";

    const percentage = (score / questions.length) * 100;

    if (percentage >= 80) {
        message = "🏆 በጣም ጥሩ! እጅግ ጥሩ እውቀት አለህ!";
    } else if (percentage >= 60) {
        message = "👏 ጥሩ ውጤት! ትንሽ ተጨማሪ ልምምድ አድርግ!";
    } else {
        message = "💪 እንደገና ሞክር! የበለጠ ትችላለህ!";
    }

    document.getElementById("message").textContent = message;
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("result")
        .classList.add("hidden");

    document.querySelector(".quiz-container")
        .classList.remove("hidden");

    showQuestion();
}

showQuestion();
