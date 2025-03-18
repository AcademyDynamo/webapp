document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startGame");
    const tournamentSection = document.querySelector(".tournament");
    const gameFieldSection = document.querySelector(".game-field");
    const playerBadges = document.querySelectorAll(".player-badge");
    const playerList = document.getElementById("player-list");
    const themeToggle = document.getElementById("themeToggle");

    // Переключение тем
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });

    // Запуск игры
    startButton.addEventListener("click", () => {
        tournamentSection.style.display = "none"; // Скрываем турнирную страницу
        gameFieldSection.style.display = "block"; // Показываем игровое поле
    });

    // Открытие списка игроков
    playerBadges.forEach(badge => {
        badge.addEventListener("click", () => {
            playerList.classList.remove("hidden");
            playerList.dataset.selectedPosition = badge.dataset.position;
        });
    });

    // Выбор игрока
    document.querySelectorAll(".player-list li").forEach(player => {
        player.addEventListener("click", () => {
            const selectedBadge = document.querySelector(.player-badge[data-position="${playerList.dataset.selectedPosition}"]);
            selectedBadge.textContent = player.dataset.name.charAt(0);
            selectedBadge.classList.add("selected");
            playerList.classList.add("hidden");
        });
    });
});
