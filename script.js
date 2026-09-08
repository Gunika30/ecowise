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
},
{
    question: "🔌 How often do you unplug chargers and devices when they are not being used?",
    options: [
        { text: "Usually", points: 2 },
        { text: "Sometimes", points: 1 },
        { text: "Rarely", points: 0 }
    ]
},
{
    question: "👕 What do you usually do with clothes you no longer use?",
    options: [
        { text: "Donate / Reuse them", points: 2 },
        { text: "Keep them unused", points: 1 },
        { text: "Throw them away", points: 0 }
    ]
}
];


let currentQuestion = 0;
let totalScore = 0;
let selectedAnswer = null;
let userAnswers = [];

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

    document.getElementById("progress").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

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

    userAnswers[currentQuestion] = selectedAnswer;

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
let level;
let tip;

if (score >= 80) {

    level = "🌿 Eco Champion";
    message = "Excellent! Your everyday choices show strong environmental awareness.";
    tip = "Keep it up! Encourage others around you to make sustainable choices too.";

} else if (score >= 60) {

    level = "🌱 Green Starter";
    message = "Good job! You already have several sustainable habits.";
    tip = "Try reducing single-use plastic and saving a little more electricity.";

} else if (score >= 40) {

    level = "🌍 Eco Explorer";
    message = "You're on your way! There are several easy habits you can improve.";
    tip = "Start with one simple change, such as carrying a reusable water bottle.";

} else {

    level = "💚 Change Maker in Progress";
    message = "Every journey starts with one small step.";
    tip = "Try focusing on saving water, reducing waste, and switching off unused appliances.";

}

document.getElementById("result-message").textContent = message;

document.getElementById("result-level").textContent = level;
    
document.getElementById("eco-tip").textContent = "💡 Your next step: " + tip;
}
updateEcoImpact();
updateDashboard();
updateActions();
updateBadge(score);

function restartQuiz() {

    startEcoCheck();
}
// ECO KNOWLEDGE CHALLENGE

const knowledgeQuestions = [
    {
        question: "🌱 Which option is generally the most sustainable for a short journey?",
        options: ["🚗 Car", "🚲 Bicycle", "✈️ Airplane"],
        answer: 1
    },
    {
        question: "♻️ Which action helps reduce waste?",
        options: ["Use disposable items", "Reuse products", "Throw everything away"],
        answer: 1
    },
    {
        question: "💧 Which habit helps conserve water?",
        options: ["Leave taps running", "Fix leaks and turn taps off", "Use more water than needed"],
        answer: 1
    }
];

let knowledgeQuestion = 0;
let knowledgeScore = 0;


function startKnowledgeChallenge() {

    knowledgeQuestion = 0;
    knowledgeScore = 0;

    document.getElementById("knowledge-result").textContent = "";

    showKnowledgeQuestion();
}


function showKnowledgeQuestion() {

    const question = knowledgeQuestions[knowledgeQuestion];

    document.getElementById("knowledge-question").textContent =
        `${knowledgeQuestion + 1}. ${question.question}`;

    const container = document.getElementById("knowledge-options");

    container.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "knowledge-option";

        button.textContent = option;

        button.onclick = () => checkKnowledgeAnswer(index);

        container.appendChild(button);
    });

    document.getElementById("knowledge-next").textContent =
        "Choose an Answer";
}


function checkKnowledgeAnswer(selected) {

    const question = knowledgeQuestions[knowledgeQuestion];

    if (selected === question.answer) {
        knowledgeScore++;
    }

    knowledgeQuestion++;

    if (knowledgeQuestion < knowledgeQuestions.length) {

        showKnowledgeQuestion();

    } else {

        document.getElementById("knowledge-question").textContent =
            "🎉 Challenge Complete!";

        document.getElementById("knowledge-options").innerHTML = "";

        document.getElementById("knowledge-next").textContent =
            "Play Again →";

        document.getElementById("knowledge-result").textContent =
            `You scored ${knowledgeScore}/${knowledgeQuestions.length} 🌱`;

        document.getElementById("knowledge-next").onclick =
            startKnowledgeChallenge;
    }
}


function nextKnowledgeQuestion() {

    startKnowledgeChallenge();
}
// ECO IMPACT

function updateEcoImpact() {

    document.getElementById("trees-count").textContent = totalScore;
    document.getElementById("water-count").textContent = Math.round(totalScore * 1.5);
    document.getElementById("plastic-count").textContent = Math.round(totalScore * 1.2);

}


// PERSONAL DASHBOARD

function updateDashboard() {

    const scores = questions.map((question, index) => {

        const answer = userAnswers[index];

        if (answer === undefined) {
            return 0;
        }

        return (question.options[answer].points / 2) * 100;

    });


    document.getElementById("transport-score").textContent =
        `${scores[0]}%`;

    document.getElementById("transport-fill").style.width =
        `${scores[0]}%`;


    document.getElementById("water-score").textContent =
        `${scores[3]}%`;

    document.getElementById("water-fill").style.width =
        `${scores[3]}%`;


    document.getElementById("waste-score").textContent =
        `${Math.round((scores[4] + scores[2]) / 2)}%`;

    document.getElementById("waste-fill").style.width =
        `${Math.round((scores[4] + scores[2]) / 2)}%`;


    document.getElementById("food-score").textContent =
        `${scores[5]}%`;

    document.getElementById("food-fill").style.width =
        `${scores[5]}%`;

}


// PERSONAL ACTIONS

function updateActions() {

    const actions = [
        "🚲 Try walking, cycling, or using public transport for short journeys.",
        "💧 Turn off taps when water is not needed.",
        "♻️ Separate recyclable and non-recyclable waste.",
        "🍽️ Take only as much food as you can finish.",
        "🛍️ Carry reusable bags, bottles, or containers."
    ];


    const actionList = document.getElementById("action-list");

    actionList.innerHTML = "";


    actions.slice(0, 3).forEach(action => {

        const card = document.createElement("div");

        card.className = "action-card";

        card.textContent = action;

        actionList.appendChild(card);

    });

}


// ECO BADGE

function updateBadge(score) {

    const badge = document.getElementById("eco-badge");

    if (score >= 80) {

        badge.innerHTML = `
            <div class="badge-icon">🏆</div>
            <h3>Eco Champion</h3>
            <p>Outstanding sustainable choices!</p>
        `;

    } else if (score >= 60) {

        badge.innerHTML = `
            <div class="badge-icon">🌿</div>
            <h3>Green Starter</h3>
            <p>You're building strong eco-friendly habits!</p>
        `;

    } else {

        badge.innerHTML = `
            <div class="badge-icon">🌱</div>
            <h3>Eco Explorer</h3>
            <p>Keep learning and growing your sustainable habits!</p>
        `;

    }

}
