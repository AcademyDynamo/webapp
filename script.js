// Получение списка игроков
async function fetchPlayers() {
    const response = await fetch("http://127.0.0.1:5000/players");
    return await response.json();
}

// Обновление информации об игроке
async function updatePlayer(playerId, newName, newTeam, newPosition) {
    await fetch("http://127.0.0.1:5000/update_player", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player_id: playerId, new_name: newName, team: newTeam, position: newPosition })
    });
}

// Загрузка игроков на страницу
async function loadPlayers() {
    const players = await fetchPlayers();
    document.querySelectorAll(".player").forEach((player, index) => {
        player.dataset.id = players[index].id;
        player.querySelector(".player-name").textContent = players[index].name;
        player.querySelector(".player-team").textContent = players[index].team;
        player.querySelector(".player-position").textContent = players[index].position;
    });
}

// Обработчик клика для выбора игрока
document.querySelectorAll(".player").forEach(player => {
    player.addEventListener("click", async () => {
        const playerId = player.dataset.id;
        const newName = prompt("Введите новое имя игрока:");
        const newTeam = prompt("Введите команду игрока:");
        const newPosition = prompt("Введите позицию игрока:");

        if (newName && newTeam && newPosition) {
            await updatePlayer(playerId, newName, newTeam, newPosition);
            loadPlayers();
        }
    });
});

// Загружаем игроков при старте
document.addEventListener("DOMContentLoaded", loadPlayers);
