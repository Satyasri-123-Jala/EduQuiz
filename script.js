const quizData = [
    {
        question: "Which language is used to structure web pages?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        answer: "HTML"
    },
    {
        question: "Which CSS property is used to change text color?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: "color"
    },
    {
        question: "Which JavaScript method selects an element by ID?",
        options: ["getElement()", "query()", "getElementById()", "selectById()"],
        answer: "getElementById()"
    },
    {
        question: "Which tag is used to link external CSS?",
        options: ["<style>", "<script>", "<link>", "<css>"],
        answer: "<link>"
    },
    {
        question: "Which of the following is a front-end framework?",
        options: ["Django", "React", "Flask", "Spring"],
        answer: "React"
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = quizData[currentIndex];
    questionEl.innerText = `Q${currentIndex + 1}. ${q.question}`;
    optionsEl.innerHTML = "";
    feedbackEl.innerText = "";
    nextBtn.style.display = "none";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = quizData[currentIndex].answer;

    if (selected === correct) {
        feedbackEl.innerText = "✅ Correct Answer!";
        score++;
    } else {
        feedbackEl.innerHTML =
            `❌ Wrong Answer: ${selected}<br>✅ Correct Answer: ${correct}`;
    }

    nextBtn.style.display = "inline-block";

    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionEl.innerText = "🎉 Quiz Completed!";
    optionsEl.innerHTML = "";
    feedbackEl.innerText = "";
    nextBtn.style.display = "none";
    scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();
