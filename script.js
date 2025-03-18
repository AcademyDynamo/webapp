const teams = {
    team1: { name: "ЮФЛ Сибирь", players: ["Игрок 1", "Игрок 2", "Игрок 3"] },
    team2: { name: "Динамо", players: ["Игрок 4", "Игрок 5", "Игрок 6"] },
    team3: { name: "Спартак", players: ["Игрок 7", "Игрок 8", "Игрок 9"] }
};

document.querySelectorAll(".player-icon").forEach(icon => {
    icon.addEventListener("click", function() {
        const teamKey = this.getAttribute("data-team");
        const team = teams[teamKey];

        document.getElementById("team-name").textContent = team.name;
        const playersList = document.getElementById("players");
        playersList.innerHTML = team.players.map(player => <li>${player}</li>).join("");

        const playerList = document.querySelector(".player-list");
        playerList.classList.remove("hidden");
    });
});
