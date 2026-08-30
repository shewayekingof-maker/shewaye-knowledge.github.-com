// ================================
// GENERAL KNOWLEDGE QUIZ
// script.js
// ================================

const questions = [
    {
        question: "What is the capital city of Ethiopia?",
        options: ["Addis Ababa", "Jimma", "Dire Dawa", "Gondar"],
        answer: "Addis Ababa"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        answer: "Lion"
    },
    {
        question: "How many days are there in a leap year?",
        options: ["365", "366", "364", "360"],
        answer: "366"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options: [
            "William Shakespeare",
            "Charles Dickens",
            "Mark Twain",
            "Isaac Newton"
        ],
        answer: "William Shakespeare"
    },
    {
        question: "What is the fastest land animal?",
        options: ["Lion", "Horse", "Cheetah", "Tiger"],
        answer: "Cheetah"
    }
];

let currentQuestion = 0;
let score = 0;

// HTML elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");

// Display question
function showQuestion() {

    const q = questions[currentQuestion];

    questionElement.textContent =
        (currentQuestion + 1) + ". " + q.question;

    optionsElement.innerHTML = "";

    q.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.onclick = function() {
            checkAnswer(button, option);
        };

        optionsElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

// Check answer
function checkAnswer(button, selectedAnswer) {

    const correctAnswer = questions[currentQuestion].answer;

    const allButtons =
        document.querySelectorAll(".option");

    allButtons.forEach(function(btn) {
        btn.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        allButtons.forEach(function(btn) {

            if (btn.textContent === correctAnswer) {
                btn.classList.add("correct");
            }

        });
    }

    scoreElement.textContent = "Score: " + score;

    nextButton.style.display = "block";
}

// Next question
nextButton.onclick = function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
};

// Show final result
function showResult() {

    questionElement.textContent = "🎉 Quiz Completed!";

    optionsElement.innerHTML = "";

    resultElement.textContent =
        "Your score is " + score + " out of " + questions.length;

    nextButton.textContent = "🔄 Restart Quiz";
    nextButton.style.display = "block";

    nextButton.onclick = restartQuiz;
}

// Restart quiz
function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    scoreElement.textContent = "Score: 0";
    resultElement.textContent = "";

    nextButton.textContent = "Next ➡️";

    showQuestion();
}

// Start quiz
showQuestion();
