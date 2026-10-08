const questions = [
    {
        q: "What does HTML stand for?",
        a: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        q: "Which language is used to style web pages?",
        a: ["HTML", "CSS", "Java", "SQL"],
        correct: 1
    },
    {
        q: "Which language adds interactivity to webpages?",
        a: ["CSS", "HTML", "JavaScript", "XML"],
        correct: 2
    },
    {
        q: "Which symbol is used for an ID selector in CSS?",
        a: [".", "#", "@", "*"],
        correct: 1
    }
];

let current = 0;
let score = 0;

function showQuestion() {
    document.getElementById("question").innerText =
        questions[current].q;

    let answers = document.getElementById("answers");
    answers.innerHTML = "";

    questions[current].a.forEach((answer, index) => {
        let button = document.createElement("button");

        button.innerText = answer;
        button.className = "answer";

        button.onclick = function () {
            if (index === questions[current].correct) {
                score++;
            }

            document.querySelectorAll(".answer").forEach(b => {
                b.disabled = true;
            });
        };

        answers.appendChild(button);
    });
}

document.getElementById("next").onclick = function () {
    current++;

    if (current < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Completed!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("next").style.display = "none";
        document.getElementById("score").innerText =
            "Your Score: " + score + "/" + questions.length;
        document.getElementById("restart").style.display = "inline";
    }
};

document.getElementById("restart").onclick = function () {
    current = 0;
    score = 0;

    document.getElementById("next").style.display = "inline";
    document.getElementById("restart").style.display = "none";
    document.getElementById("score").innerText = "";

    showQuestion();
};

showQuestion();