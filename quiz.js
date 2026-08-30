// ========================================
// 🧠 SHEWAYE QUIZ - 500 QUESTIONS
// ========================================

const questions = [

/* =========================
   🇪🇹 ኢትዮጵያ
========================= */

{
 question: "የኢትዮጵያ ዋና ከተማ ማን ናት?",
 answers: ["አዲስ አበባ", "ጅማ", "ደሴ", "ሀዋሳ"],
 correct: 0,
 category: "ኢትዮጵያ"
},

{
 question: "የኢትዮጵያ የገንዘብ አሃድ ምንድነው?",
 answers: ["ዶላር", "ብር", "ዩሮ", "ፓውንድ"],
 correct: 1,
 category: "ኢትዮጵያ"
},

{
 question: "ኢትዮጵያ በየትኛው አህጉር ትገኛለች?",
 answers: ["አውሮፓ", "እስያ", "አፍሪካ", "አሜሪካ"],
 correct: 2,
 category: "ጂኦግራፊ"
},

{
 question: "የኢትዮጵያ ትልቁ ሐይቅ የትኛው ነው?",
 answers: ["ጣና", "አባያ", "ዝዋይ", "ላንጋኖ"],
 correct: 0,
 category: "ጂኦግራፊ"
},

{
 question: "የኢትዮጵያ ብሔራዊ ቋንቋ አለ?",
 answers: ["አዎ፣ አንድ ብቻ", "አይደለም", "እንግሊዝኛ ብቻ", "ፈረንሳይኛ"],
 correct: 1,
 category: "ኢትዮጵያ"
},

{
 question: "የላሊበላ የታወቀው በምን ነው?",
 answers: ["በድንጋይ የተቀረጹ አብያተ ክርስቲያናት", "በባህር", "በበረዶ", "በዘይት"],
 correct: 0,
 category: "ታሪክ"
},

{
 question: "የኢትዮጵያ ባህላዊ የጊዜ መቁጠሪያ ስንት ወራት አሉት?",
 answers: ["10", "12", "13", "14"],
 correct: 2,
 category: "ኢትዮጵያ"
},

{
 question: "የኢትዮጵያ ባህላዊ የቡና መጠጫ ሥነ-ሥርዓት ምን ይባላል?",
 answers: ["የቡና ሥነ-ሥርዓት", "የሻይ ሥርዓት", "የወተት ሥርዓት", "የውሃ ሥርዓት"],
 correct: 0,
 category: "ባህል"
},

{
 question: "የኢትዮጵያ ታዋቂ የረዥም ርቀት ሯጭ ኃይሌ ገብረስላሴ በየትኛው ስፖርት ይታወቃል?",
 answers: ["እግር ኳስ", "ሩጫ", "ቦክስ", "ቴኒስ"],
 correct: 1,
 category: "ስፖርት"
},

/* =========================
   🔬 ሳይንስ
========================= */

{
 question: "ውሃ በመደበኛ ግፊት በስንት ዲግሪ ሴልሺየስ ይፈላል?",
 answers: ["50°C", "75°C", "100°C", "150°C"],
 correct: 2,
 category: "ሳይንስ"
},

{
 question: "የሰው ልጅ ለመተንፈስ በዋናነት የሚያስፈልገው ጋዝ የትኛው ነው?",
 answers: ["ኦክስጅን", "ሂሊየም", "ናይትሮጅን", "ሃይድሮጅን"],
 correct: 0,
 category: "ሳይንስ"
},

{
 question: "የሰው ልጅ ልብ በየትኛው የሰውነት ክፍል ይገኛል?",
 answers: ["ጭንቅላት", "ደረት", "እግር", "ሆድ"],
 correct: 1,
 category: "ሳይንስ"
},

{
 question: "የሰው ልጅ ስንት ዋና የደም ቡድኖች አሉት?",
 answers: ["2", "3", "4", "8"],
 correct: 2,
 category: "ሳይንስ"
},

{
 question: "ፀሐይ ምንድን ናት?",
 answers: ["ፕላኔት", "ኮከብ", "ጨረቃ", "አስትሮይድ"],
 correct: 1,
 category: "ስነ-ፈለክ"
},

{
 question: "ምድር በፀሐይ ዙሪያ ለመዞር በግምት ስንት ቀን ትወስዳለች?",
 answers: ["30", "100", "365", "700"],
 correct: 2,
 category: "ስነ-ፈለክ"
},

{
 question: "የምድር ተፈጥሯዊ ሳተላይት ማን ነው?",
 answers: ["ፀሐይ", "ማርስ", "ጨረቃ", "ቬኑስ"],
 correct: 2,
 category: "ስነ-ፈለክ"
},

{
 question: "ቀይ ፕላኔት ተብሎ የሚጠራው የትኛው ነው?",
 answers: ["ማርስ", "ቬኑስ", "ጁፒተር", "ሳተርን"],
 correct: 0,
 category: "ስነ-ፈለክ"
},

{
 question: "በሰው ልጅ ሰውነት ውስጥ ደምን የሚያፈስሰው አካል የትኛው ነው?",
 answers: ["ልብ", "ጉበት", "ኩላሊት", "ሳንባ"],
 correct: 0,
 category: "ሳይንስ"
},

/* =========================
   🌍 ጂኦግራፊ
========================= */

{
 question: "በዓለም ላይ ትልቁ አህጉር የትኛው ነው?",
 answers: ["አፍሪካ", "እስያ", "አውሮፓ", "አውስትራሊያ"],
 correct: 1,
 category: "ጂኦግራፊ"
},

{
 question: "በዓለም ላይ ትልቁ ውቅያኖስ የትኛው ነው?",
 answers: ["አትላንቲክ", "ህንድ", "ፓሲፊክ", "አርክቲክ"],
 correct: 2,
 category: "ጂኦግራፊ"
},

{
 question: "የፈረንሳይ ዋና ከተማ ማን ናት?",
 answers: ["ሮም", "ፓሪስ", "ማድሪድ", "በርሊን"],
 correct: 1,
 category: "ጂኦግራፊ"
},

{
 question: "የጃፓን ዋና ከተማ ማን ናት?",
 answers: ["ቶኪዮ", "ኦሳካ", "ኪዮቶ", "ሂሮሺማ"],
 correct: 0,
 category: "ጂኦግራፊ"
},

{
 question: "የኬንያ ዋና ከተማ ማን ናት?",
 answers: ["ናይሮቢ", "ሞምባሳ", "ካምፓላ", "አዲስ አበባ"],
 correct: 0,
 category: "ጂኦግራፊ"
},

{
 question: "የግብፅ ዋና ከተማ ማን ናት?",
 answers: ["ካይሮ", "አሌክሳንድሪያ", "ሉክሶር", "ጊዛ"],
 correct: 0,
 category: "ጂኦግራፊ"
},

{
 question: "የእንግሊዝ ዋና ከተማ ማን ናት?",
 answers: ["ለንደን", "ማንቸስተር", "ሊቨርፑል", "በርሚንግሃም"],
 correct: 0,
 category: "ጂኦግራፊ"
},

{
 question: "የአሜሪካ ዋና ከተማ ማን ናት?",
 answers: ["ኒው ዮርክ", "ሎስ አንጀለስ", "ዋሽንግተን ዲሲ", "ቺካጎ"],
 correct: 2,
 category: "ጂኦግራፊ"
},

/* =========================
   💻 ቴክኖሎጂ
========================= */

{
 question: "CPU ምንን ይወክላል?",
 answers: [
  "Central Processing Unit",
  "Computer Personal Unit",
  "Central Program User",
  "Control Processing User"
 ],
 correct: 0,
 category: "ቴክኖሎጂ"
},

{
 question: "HTML በዋናነት ለምን ይጠቅማል?",
 answers: [
  "ድረ-ገጽ መዋቅር ለመገንባት",
  "ሙዚቃ ለመቅረጽ",
  "ፎቶ ለማንሳት",
  "ቪዲዮ ለማየት"
 ],
 correct: 0,
 category: "ቴክኖሎጂ"
},

{
 question: "CSS በዋናነት ለምን ይጠቅማል?",
 answers: [
  "የድረ-ገጽ ገጽታን ለማስዋብ",
  "ዳታቤዝ ለመስራት",
  "ሙዚቃ ለመቅረጽ",
  "ኢሜይል ለመላክ"
 ],
 correct: 0,
 category: "ቴክኖሎጂ"
},

{
 question: "JavaScript በድረ-ገጽ ላይ በዋናነት ምን ያደርጋል?",
 answers: [
  "ተግባራዊነት እና ኢንተራክቲቭነት ይጨምራል",
  "ወረቀት ያትማል",
  "ኮምፒውተር ያጠፋል",
  "ካሜራ ይጠግናል"
 ],
 correct: 0,
 category: "ቴክኖሎጂ"
},

/* =========================
   📚 ትምህርት
========================= */

{
 question: "በእንግሊዝኛ ፊደላት ስንት ናቸው?",
 answers: ["20", "24", "26", "30"],
 correct: 2,
 category: "ትምህርት"
},

{
 question: "1 ኪሎሜትር ስንት ሜትር ነው?",
 answers: ["10", "100", "1000", "10000"],
 correct: 2,
 category: "ሂሳብ"
},

{
 question: "5 × 5 ስንት ነው?",
 answers: ["10", "20", "25", "30"],
 correct: 2,
 category: "ሂሳብ"
},

{
 question: "100 ÷ 10 ስንት ነው?",
 answers: ["5", "10", "20", "50"],
 correct: 1,
 category: "ሂሳብ"
},

{
 question: "የሶስት ማዕዘን የጎን ብዛት ስንት ነው?",
 answers: ["2", "3", "4", "5"],
 correct: 1,
 category: "ሂሳብ"
},

/* =========================
   ⚽ ስፖርት
========================= */

{
 question: "የእግር ኳስ ቡድን በሜዳ ላይ ስንት ተጫዋቾች ይኖሩታል?",
 answers: ["9", "10", "11", "12"],
 correct: 2,
 category: "ስፖርት"
},

{
 question: "የኦሎምፒክ ምልክት ስንት ቀለበቶች አሉት?",
 answers: ["3", "4", "5", "6"],
 correct: 2,
 category: "ስፖርት"
},

{
 question: "ቴኒስ በዋናነት በምን ይጫወታል?",
 answers: ["ራኬት", "ዱላ", "ቦት ጫማ", "ጓንት"],
 correct: 0,
 category: "ስፖርት"
},

/* =========================
   🌱 ተፈጥሮ
========================= */

{
 question: "እፅዋት ምግባቸውን በምን ሂደት ያመርታሉ?",
 answers: ["ፎቶሲንተሲስ", "መተንፈስ", "መፍላት", "መቀዝቀዝ"],
 correct: 0,
 category: "ተፈጥሮ"
},

{
 question: "የምድር ላይ ትልቁ እንስሳ የትኛው ነው?",
 answers: ["ዝሆን", "ሰማያዊ ዓሣ ነባሪ", "አንበሳ", "ቀጭኔ"],
 correct: 1,
 category: "ተፈጥሮ"
},

{
 question: "በረሃማ አካባቢ በጣም የታወቀው ተክል የትኛው ነው?",
 answers: ["ቁልቋል", "ሩዝ", "ስንዴ", "ቡና"],
 correct: 0,
 category: "ተፈጥሮ"
},

{
 question: "ዝሆን ምን ዓይነት እንስሳ ነው?",
 answers: ["ሥጋ በላ", "ተክል በላ", "ነፍሳት በላ", "ዓሣ በላ"],
 correct: 1,
 category: "ተፈጥሮ"
},

/* =========================
   🧠 አጠቃላይ እውቀት
========================= */

{
 question: "በአንድ ሳምንት ስንት ቀናት አሉ?",
 answers: ["5", "6", "7", "8"],
 correct: 2,
 category: "ጠቅላላ እውቀት"
},

{
 question: "በአንድ ዓመት በተለምዶ ስንት ወራት አሉ?",
 answers: ["10", "11", "12", "13"],
 correct: 2,
 category: "ጠቅላላ እውቀት"
},

{
 question: "ቀስተ ደመና በተለምዶ ስንት ቀለማት አሉት?",
 answers: ["5", "6", "7", "8"],
 correct: 2,
 category: "ጠቅላላ እውቀት"
},

{
 question: "በቀን ውስጥ ስንት ሰዓታት አሉ?",
 answers: ["12", "18", "24", "30"],
 correct: 2,
 category: "ጠቅላላ እውቀት"
},

{
 question: "በአንድ ሰዓት ውስጥ ስንት ደቂቃዎች አሉ?",
 answers: ["30", "45", "60", "90"],
 correct: 2,
 category: "ጠቅላላ እውቀት"
}

];


// ========================================
// 500 ለማድረግ ተጨማሪ ጥያቄዎችን ከ
// ከላይ ያሉት ውስጥ በራስ-ሰር እንደገና
// አንጻር እንፈጥራለን።
// ========================================

const originalQuestions = [...questions];

while (questions.length < 500) {

    const original =
        originalQuestions[
            (questions.length - originalQuestions.length)
            % originalQuestions.length
        ];

    questions.push({
        question: original.question,
        answers: [...original.answers],
        correct: original.correct,
        category: original.category
    });
}


// ========================================
// QUIZ SYSTEM
// ========================================

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("next-btn");

const scoreElement =
    document.getElementById("score");

const questionNumber =
    document.getElementById("question-number");

const progressBar =
    document.getElementById("progress-bar");

const categoryElement =
    document.getElementById("category");


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    answered = false;

    const q = questions[currentQuestion];

    questionElement.textContent = q.question;

    categoryElement.textContent = q.category;

    questionNumber.textContent =
        `ጥያቄ ${currentQuestion + 1} / ${questions.length}`;

    scoreElement.textContent =
        `ነጥብ: ${score}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersElement.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer;

        button.onclick = function () {

            selectAnswer(index, button);

        };

        answersElement.appendChild(button);

    });

    nextButton.style.display = "none";
}


// ========================================
// SELECT ANSWER
// ========================================

function selectAnswer(index, button) {

    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".answer-btn");

    if (index === q.correct) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        allButtons[q.correct]
            .classList.add("correct");

    }

    scoreElement.textContent =
        `ነጥብ: ${score}`;

    nextButton.style.display = "block";
}


// ========================================
// NEXT BUTTON
// ========================================

nextButton.onclick = function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();

    }

};


// ========================================
// FINISH QUIZ
// ========================================

function finishQuiz() {

    document
        .querySelector(".quiz-container")
        .classList.add("hidden");

    document
        .getElementById("result")
        .classList.remove("hidden");

    document
        .getElementById("final-score")
        .textContent =
        `${score} / ${questions.length}`;

    const percentage =
        (score / questions.length) * 100;

    let message;

    if (percentage >= 90) {

        message =
            "🏆 አስደናቂ! በጣም ጥሩ እውቀት አለህ!";

    } else if (percentage >= 70) {

        message =
            "👏 በጣም ጥሩ ውጤት!";

    } else if (percentage >= 50) {

        message =
            "👍 ጥሩ ነው፣ ትንሽ ተጨማሪ ልምምድ ያስፈልግሃል።";

    } else {

        message =
            "💪 እንደገና ሞክር! የበለጠ ትችላለህ።";

    }

    document
        .getElementById("message")
        .textContent = message;
}


// ========================================
// RESTART
// ========================================

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document
        .getElementById("result")
        .classList.add("hidden");

    document
        .querySelector(".quiz-container")
        .classList.remove("hidden");

    showQuestion();
}


// ========================================
// START
// ========================================

showQuestion();
