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

// Открытие списка запасных с затемнением экрана
async function showSubstitutes(playerElement) {
    const substitutes = await fetchSubstitutes();

    // Если уже открыто - закрываем перед созданием нового списка
    closeSubstitutes();

    // Затемнение экрана
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Контейнер для списка запасных
    const listContainer = document.createElement("div");
    listContainer.classList.add("substitutes-container");

    substitutes.forEach(sub => {
        const listItem = document.createElement("div");
        listItem.classList.add("substitute-item");
        listItem.textContent = ${sub.name} - ${sub.team} (${sub.position});
        
        listItem.addEventListener("click", () => {
            playerElement.querySelector(".player-name").textContent = sub.name;
            playerElement.querySelector(".player-team").textContent = sub.team;
            playerElement.querySelector(".player-position").textContent = sub.position;
            closeSubstitutes();
        });

        listContainer.appendChild(listItem);
    });

    overlay.appendChild(listContainer);
    document.body.appendChild(overlay);

    // Закрытие списка при клике вне него
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeSubstitutes();
        }
    });
}

// Закрытие списка запасных
function closeSubstitutes() {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.remove();
    }
}

// Назначаем обработчик клика на футболки
document.querySelectorAll(".player").forEach(player => {
    player.addEventListener("click", () => showSubstitutes(player));
});

// Загружаем игроков при старте
document.addEventListener("DOMContentLoaded", loadPlayers);
