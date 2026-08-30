
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
