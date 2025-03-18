// Получение списка игроков
async function fetchPlayers() {
    const response = await fetch("http://127.0.0.1:5000/players");
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

// Показ затемнения и прямоугольника
function showOverlay() {
    closeOverlay(); // Закрываем, если уже открыто

    // Затемнение экрана
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Прямоугольник
    const modal = document.createElement("div");
    modal.classList.add("modal-box");
    modal.textContent = "Выбор игрока..."; // Заглушка

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Блокируем скролл
    document.body.style.overflow = "hidden";

    // Закрытие при клике вне прямоугольника
    overlay.addEventListener("click", closeOverlay);
}

// Закрытие затемнения и модального окна
function closeOverlay() {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.remove();
    }
    document.body.style.overflow = "auto"; // Разблокируем скролл
}

// Назначаем обработчик клика на футболки
document.querySelectorAll(".player").forEach(player => {
    player.addEventListener("click", showOverlay);
});

// Загружаем игроков при старте
document.addEventListener("DOMContentLoaded", loadPlayers);
