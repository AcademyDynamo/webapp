console.log("Скрипт загружен!");
document.querySelectorAll(".player").forEach(player => {
    console.log("Нашёл игрока:", player);
});

// Показ затемнения и списка игроков
function showOverlay(playerElement) {
    closeOverlay(); // Закрываем, если уже открыто

    // Затемнение экрана
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Прямоугольник со списком игроков
    const modal = document.createElement("div");
    modal.classList.add("modal-box");

    // Тестовый список игроков (5 примеров)
    const players = [
        { name: "Игрок 1", team: "Команда A", position: "Нападающий" },
        { name: "Игрок 2", team: "Команда B", position: "Защитник" },
        { name: "Игрок 3", team: "Команда C", position: "Полузащитник" },
        { name: "Игрок 4", team: "Команда D", position: "Вратарь" },
        { name: "Игрок 5", team: "Команда E", position: "Полузащитник" }
    ];

    players.forEach(player => {
        const listItem = document.createElement("div");
        listItem.classList.add("substitute-item");
        listItem.textContent = ${player.name} - ${player.team} (${player.position});
        
        listItem.addEventListener("click", () => {
            playerElement.querySelector(".player-name").textContent = player.name;
            playerElement.querySelector(".player-team").textContent = player.team;
            playerElement.querySelector(".player-position").textContent = player.position;
            closeOverlay();
        });

        modal.appendChild(listItem);
    });

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Блокируем остальные клики
    document.body.classList.add("no-click");

    // Закрытие при клике вне списка
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });
}

// Закрытие затемнения
function closeOverlay() {
    const overlay = document.querySelector(".overlay");
    if (overlay) overlay.remove();
    
    // Разблокируем клики
    document.body.classList.remove("no-click");
}

// Назначаем обработчик клика на игроков
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".player").forEach(player => {
        player.addEventListener("click", () => showOverlay(player));
    });
});
