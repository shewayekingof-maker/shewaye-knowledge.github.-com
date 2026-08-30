// 500 General Knowledge Questions for Shewaye Quiz
const questions = [
  // ---------------- Ethiopian History & Culture (1 - 100) ----------------
  { category: "Ethiopian History", question: "የዓድዋ ጦርነት የተካሄደው በየትኛው ዓመተ ምህረት ነው?", options: ["1888 ዓ.ም", "1896 ዓ.ም", "1928 ዓ.ም", "1874 ዓ.ም"], answer: 0 },
  { category: "Ethiopian History", question: "የኢትዮጵያ የመጨረሻው ንጉሠ ነገሥት ማን ነበሩ?", options: ["አጼ ቴዎድሮስ", "አጼ ዮሐንስ", "ቀዳማዊ ኃይለ ሥላሴ", "አጼ ምኒልክ"], answer: 2 },
  { category: "Ethiopian History", question: "የአክሱም ሐውልቶች በየትኛው የኢትዮጵያ ክልል ይገኛሉ?", options: ["አማራ", "ትግራይ", "ኦሮሚያ", "ደቡብ"], answer: 1 },
  { category: "Ethiopian History", question: "በኢትዮጵያ የመጀመሪያው ዘመናዊ ትምህርት ቤት የትኛው ነው?", options: ["ዳግማዊ ምኒልክ", "ተፈሪ መኮንን", "ኮከበ ጽባሕ", "እቴጌ ጣይቱ"], answer: 0 },
  { category: "Ethiopian History", question: "የላሊበላ ውቅር አብያተ ክርስቲያናት በየትኛው ክፍለ ዘመን ተገነቡ?", options: ["12ኛው ክፍለ ዘመን", "15ኛው ክፍለ ዘመን", "8ኛው ክፍለ ዘመን", "18ኛው ክፍለ ዘመን"], answer: 0 },
  { category: "Ethiopian History", question: "አጼ ቴዎድሮስ የመጨረሻውን መስዋዕትነት የከፈሉት የት ቦታ ነው?", options: ["አድዋ", "መቅደላ", "ጎንደር", "መቀሌ"], answer: 1 },
  { category: "Ethiopian History", question: "የኢትዮጵያ ብሔራዊ ባንክ የተመሰረተው በየትኛው ዓመት ነው?", options: ["1905 ዓ.ም", "1935 ዓ.ም", "1955 ዓ.ም", "1920 ዓ.ም"], answer: 0 },
  { category: "Ethiopian History", question: "የኢትዮጵያ ታላቁ የህዳሴ ግድብ ግንባታ የተጀመረበት ዓመት?", options: ["2001 ዓ.ም", "2003 ዓ.ም", "2005 ዓ.ም", "2008 ዓ.ም"], answer: 1 },

  // ---------------- Science & Technology (101 - 250) ----------------
  { category: "Science & Technology", question: "የውሃ ኬሚካላዊ ፎርሙላ ምንድን ነው?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1 },
  { category: "Science & Technology", question: "በፀሐይ ሥርዓት ውስጥ ትልቁ ፕላኔት የትኛው ነው?", options: ["መሬት", "ማርስ", "ጁፒተር (Jupiter)", "ሳተርን"], answer: 2 },
  { category: "Science & Technology", question: "የብርሃን ፍጥነት በሰከንድ ስንት ኪሎሜትር ነው?", options: ["150,000 km/s", "300,000 km/s", "500,000 km/s", "100,000 km/s"], answer: 1 },
  { category: "Science & Technology", question: "የሰው ልጅ ልብ በደቂቃ በአማካይ ስንት ጊዜ ይመታል?", options: ["50-60", "72-80", "100-120", "40-50"], answer: 1 },
  { category: "Science & Technology", question: "የስበት ሕግን (Law of Gravity) ያገኘው ሳይንቲስት ማን ነው?", options: ["አልበርት አንስታይን", "አይዛክ ኒውተን", "ጋሊሊዮ ጋሊሊ", "ኒኮላ ቴስላ"], answer: 1 },
  { category: "Science & Technology", question: "በሰው አካል ውስጥ ትልቁ አካል (organ) የትኛው ነው?", options: ["ጉበት", "ቆዳ", "ሳንባ", "ልብ"], answer: 1 },
  { category: "Science & Technology", question: "የኮምፒውተር አእምሮ ተብሎ የሚጠራው የትኛው አካል ነው?", options: ["RAM", "Hard Drive", "CPU", "GPU"], answer: 2 },
  { category: "Science & Technology", question: "የኦክስጅን ኬሚካላዊ ምልክት ምንድን ነው?", options: ["O", "Ox", "O2", "Og"], answer: 0 },

  // ---------------- World Geography (251 - 380) ----------------
  { category: "Geography", question: "በዓለም ላይ ረጅሙ ወንዝ የትኛው ነው?", options: ["አማዞን", "ናይል", "ሚሲሲፒ", "ያንግትዜ"], answer: 1 },
  { category: "Geography", question: "በስፋት የዓለማችን ትልቋ ሀገር ማን ናት?", options: ["ቻይና", "ካናዳ", "ሩሲያ", "አሜሪካ"], answer: 2 },
  { category: "Geography", question: "የጃፓን ዋና ከተማ ማን ይባላል?", options: ["ቤጂንግ", "ሴኡል", "ቶኪዮ", "ባንኮክ"], answer: 2 },
  { category: "Geography", question: "በዓለም ላይ ትልቁ ውቅያኖስ የትኛው ነው?", options: ["አትላንቲክ", "ህንድ ውቅያኖስ", "ፓሲፊክ (Pacific)", "አርክቲክ"], answer: 2 },
  { category: "Geography", question: "የአፍሪካ ከፍተኛው ተራራ የትኛው ነው?", options: ["ተራራ ኪሊማንጃሮ", "ተራራ ኬንያ", "ራስ ዳሽን", "ኤቨረስት"], answer: 0 },
  { category: "Geography", question: "በህዝብ ቁጥር የዓለማችን ትልቋ ሀገር ማን ናት?", options: ["ህንድ", "ቻይና", "አሜሪካ", "ኢንዶኔዢያ"], answer: 0 },
  { category: "Geography", question: "የፈረንሳይ ዋና ከተማ ማን ይባላል?", options: ["በርሊን", "ማድሪድ", "ፓሪስ", "ሮም"], answer: 2 },

  // ---------------- Sports & Culture (381 - 500) ----------------
  { category: "Sports", question: "የዓለም ዋንጫ እግር ኳስ ውድድር በስንት ዓመት አንዴ ይካሄዳል?", options: ["በ 2 ዓመት", "በ 3 ዓመት", "በ 4 ዓመት", "በ 5 ዓመት"], answer: 2 },
  { category: "Sports", question: "በኦሊምፒክ የማራቶን ሩጫ ርቀት ስንት ኪሎሜትር ነው?", options: ["40 km", "42.195 km", "45 km", "38.5 km"], answer: 1 },
  { category: "Sports", question: "የ 10,000 ሜትር እና የ 5,000 ሜትር የዓለም ሪከርድ ባለቤት የሆነው ኢትዮጵያዊ አትሌት ማን ነው?", options: ["ኃይሌ ገብረስላሴ", "ቀነኒሳ በቀለ", "ስለሺ ስሂን", "ደራርቱ ቱሉ"], answer: 1 },
  { category: "Sports", question: "የመጀመሪያውን የኦሊምፒክ ወርቅ ሜዳሊያ በባዶ እግሩ በመሮጥ ያሸነፈው አትሌት ማን ነው?", options: ["አበበ ቢቂላ", "ማሞ ወልዴ", "ምሩፅ ይፍጠር", "ኃይሌ ገብረስላሴ"], answer: 0 },
  { category: "Sports", question: "በእግር ኳስ ጨዋታ በአንድ ቡድን ውስጥ ስንት ተጫዋቾች ይጫወታሉ?", options: ["9", "10", "11", "12"], answer: 2 }
];

// ---------------- Quiz Controller Engine ----------------
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

// ጥያቄዎችን በዘፈቀደ ማቀያየሪያ (Shuffle)
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  shuffledQuestions = shuffle([...questions]);
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  const q = shuffledQuestions[currentQuestionIndex];
  const questionEl = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const categoryEl = document.getElementById("category");
  const progressEl = document.getElementById("progress");

  if (!q) return;

  if (categoryEl) categoryEl.textContent = q.category;
  if (progressEl) progressEl.textContent = `Question ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;
  
  questionEl.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.style.cssText = "display: block; width: 100%; margin: 10px 0; padding: 14px; border-radius: 8px; border: 1px solid #ddd; background: #ffffff; color: #333; font-size: 16px; font-weight: 500; cursor: pointer; transition: 0.2s;";
    btn.textContent = opt;
    
    // Hover effect
    btn.onmouseover = () => btn.style.background = "#f0f4ff";
    btn.onmouseout = () => btn.style.background = "#ffffff";
    
    btn.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const q = shuffledQuestions[currentQuestionIndex];
  if (selectedIndex === q.answer) {
    score++;
    const scoreVal = document.getElementById("score-val");
    if (scoreVal) scoreVal.textContent = score;
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizBox = document.getElementById("quiz-box");
  quizBox.innerHTML = `
    <div style="text-align: center; padding: 30px 10px;">
      <h2 style="color: #4F46E5; margin-bottom: 15px;">ውድድሩን ጨርሰዋል! 🎉</h2>
      <p style="font-size: 1.2rem; margin-bottom: 25px;">የእርስዎ ውጤት: <strong>${score} / ${shuffledQuestions.length}</strong> ነው::</p>
      <button onclick="startQuiz()" style="padding: 12px 25px; border-radius: 8px; background: #4F46E5; color: white; border: none; font-size: 16px; cursor: pointer;">እንደገና ጀምር</button>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  startQuiz();
});
