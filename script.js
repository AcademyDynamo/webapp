// Получение списка игроков
async function fetchPlayers() {
    const response = await fetch("http://127.0.0.1:5000/players");
    return await response.json();
}

// Получение списка запасных
async function fetchSubstitutes() {
    const response = await fetch("http://127.0.0.1:5000/substitutes");
    return await response.json();
}

// Загрузка игроков на поле
async function loadPlayers() {
    const players = await fetchPlayers();
    const playerElements = document.querySelectorAll(".player");

    playerElements.forEach((player, index) => {
        if (players[index]) {
            player.dataset.id = players[index].id;
            player.querySelector(".player-name").textContent = players[index].name;
            player.querySelector(".player-team").textContent = players[index].team;
            player.querySelector(".player-position").textContent = players[index].position;
        }
    });
}

// Загрузка запасных
async function loadSubstitutes() {
    const substitutes = await fetchSubstitutes();
    const substitutesList = document.querySelector(".substitutes-list");
    
    substitutesList.innerHTML = ""; // Очищаем список перед обновлением

    substitutes.forEach(sub => {
        const listItem = document.createElement("li");
        listItem.textContent = `${sub.name} - ${sub.team} (${sub.position})`;
        substitutesList.appendChild(listItem);
    });
}

// Загружаем игроков и запасных при старте
document.addEventListener("DOMContentLoaded", () => {
    loadPlayers();
    loadSubstitutes();
});
