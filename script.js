const questions = [
    {
        question: "🚗 How do you usually travel?",
        options: [
            { text: "Walk / Bicycle", points: 2 },
            { text: "Public Transport", points: 1 },
            { text: "Car", points: 0 }
        ]
    },
    {
        question: "💡 How often do you switch off lights and appliances when they are not needed?",
        options: [
            { text: "Always", points: 2 },
            { text: "Sometimes", points: 1 },
            { text: "Rarely", points: 0 }
        ]
    },
    {
        question: "🧴 How often do you use single-use plastic?",
        options: [
            { text: "Rarely", points: 2 },
            { text: "Sometimes", points: 1 },
            { text: "Often", points: 0 }
        ]
    },
    {
        question: "💧 How careful are you about saving water?",
        options: [
            { text: "Very careful", points: 2 },
            { text: "Moderately careful", points: 1 },
            { text: "I don't usually think about it", points: 0 }
        ]
    },
    {
        question: "♻️ How often do you separate recyclable and non-recyclable waste?",
        options: [
            { text: "Always", points: 2 },
            { text: "Sometimes", points: 1 },
            { text: "Rarely", points: 0 }
        ]
    },
    {
        question: "🍽️ How often do you avoid wasting food?",
        options: [
            { text: "Almost always", points: 2 },
            { text: "Sometimes", points: 1 },
            { text: "Rarely", points: 0 }
        ]
    },
    {
        question: "🛍️ How often do you use reusable bags, bottles, or containers?",
        options: [
            { text: "Frequently", points: 2 },
            { text: "Sometimes", points: 1 },
            { text: "Rarely", points: 0 }
        ]
    },
    {
        question: "🌳 How often do you take part in environmentally friendly activities?",
        options: [
            { text: "Frequently", points: 2 },
            { text: "Sometimes", points: 1 },
            { text: "Rarely", points: 0 }
        ]
    }
];


let currentQuestion = 0;
let totalScore = 0;
let selectedAnswer = null;


function startEcoCheck() {

    currentQuestion = 0;
    totalScore = 0;
    selectedAnswer = null;

    document.getElementById("result").style.display = "none";
    document.getElementById("question-container").style.display = "block";

    document.getElementById("impact").scrollIntoView({
        behavior: "smooth"
    });

    showQuestion();
}


function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question").textContent =
        `${currentQuestion + 1}. ${question.question}`;

    const optionsContainer = document.getElementById("options");

    optionsContainer.innerHTML = "";

    selectedAnswer = null;


    question.options.forEach((option, index) => {

        const label = document.createElement("label");

        label.className = "option";

        label.innerHTML = `
            <input type="radio" name="answer" value="${index}">
            <span class="dot"></span>
            <span>${option.text}</span>
        `;


        label.querySelector("input").addEventListener("change", () => {

            selectedAnswer = index;

            document.querySelectorAll(".option").forEach(item => {
                item.classList.remove("selected");
            });

            label.classList.add("selected");
        });


        optionsContainer.appendChild(label);
    });


    const nextButton = document.getElementById("next-btn");

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "See My Eco Score 🌍"
            : "Next →";
}


function nextQuestion() {

    if (selectedAnswer === null) {

        alert("Please choose an option first 🌱");

        return;
    }


    totalScore +=
        questions[currentQuestion].options[selectedAnswer].points;


    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();
    }
}


function showResult() {

    const score = Math.round(
        (totalScore / (questions.length * 2)) * 100
    );


    document.getElementById("question-container").style.display = "none";

    document.getElementById("result").style.display = "block";


    document.getElementById("score-number").textContent =
        `${score}/100 🌍`;

    document.getElementById("score-fill").style.width =
        `${score}%`;


    let message;


    if (score >= 80) {

        message =
            "🌿 Excellent! Your everyday choices show strong environmental awareness.";

    } else if (score >= 60) {

        message =
            "🌱 Good job! A few small changes could make your habits even more sustainable.";

    } else {

        message =
            "💚 There's room to improve! Start with one small sustainable change at a time.";
    }


    document.getElementById("result-message").textContent = message;
}


function restartQuiz() {

    startEcoCheck();
}
