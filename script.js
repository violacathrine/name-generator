document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("randomizeBtn").addEventListener("click", generateTeams);
});

const generateTeams = () => {
    // Get inputs
    const namesInput = document.getElementById("names").value.trim();
    const numTeams = parseInt(document.getElementById("teams").value);
    const resultDiv = document.getElementById("result");

    // Validation for names input
    if (!namesInput) {
        resultDiv.innerHTML = `<p style="color: red;">Please enter at least two name.</p>`;
        return;
    }

    // Convert name string to array and filter out empty values
    let names = namesInput.split(",").map(name => name.trim()).filter(name => name);

    // Validation
    if (names.length < numTeams) {
        resultDiv.innerHTML = `<p style="color: red;">Not enough names to create the requested number of teams.</p>`;
        return;
    }

    // Sort names random
    names = names.sort(() => Math.random() - 0.5);

    // Create teams and sort members
    const teams = Array.from({ length: numTeams }, () => []);
    names.forEach((name, index) => teams[index % numTeams].push(name));

    // Result
    resultDiv.innerHTML = teams
        .map((team, i) => `<strong>Team ${i + 1}:</strong> ${team.join(", ")}`)
        .join("<br>"); // Varje lag på egen rad
};
