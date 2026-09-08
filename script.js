function startEcoCheck() {

    let transport = prompt(
        "🚗 How do you usually travel?\n\n" +
        "1 = Walk / Bicycle\n" +
        "2 = Bus / Metro\n" +
        "3 = Car"
    );

    let electricity = prompt(
        "💡 How much electricity do you use daily?\n\n" +
        "1 = Low\n" +
        "2 = Moderate\n" +
        "3 = High"
    );

    let plastic = prompt(
        "🧴 How often do you use single-use plastic?\n\n" +
        "1 = Rarely\n" +
        "2 = Sometimes\n" +
        "3 = Often"
    );

    if (!transport || !electricity || !plastic) {
        alert("Please complete all three questions 🌱");
        return;
    }

    transport = Number(transport);
    electricity = Number(electricity);
    plastic = Number(plastic);

    if (
        ![1, 2, 3].includes(transport) ||
        ![1, 2, 3].includes(electricity) ||
        ![1, 2, 3].includes(plastic)
    ) {
        alert("Please enter only 1, 2, or 3.");
        return;
    }

    let score = 100;

    score -= (transport - 1) * 20;
    score -= (electricity - 1) * 10;
    score -= (plastic - 1) * 15;

    let message;

    if (score >= 80) {
        message = "🌿 Excellent! Your choices show strong environmental awareness.";
    } else if (score >= 60) {
        message = "🌱 Good job! A few small changes could make your lifestyle even more sustainable.";
    } else {
        message = "💚 There's room to improve! Start with one small sustainable change at a time.";
    }

    document.getElementById("result").innerHTML = `
    <h2>Your Eco Score: ${score}/100 🌍</h2>

    <div class="score-bar">
        <div class="score-fill" style="width: ${score}%"></div>
    </div>

    <p>${message}</p>

    <p>Small choices can create meaningful change.</p>
`;
}
