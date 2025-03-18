// Обработка кнопок на первой странице
document.addEventListener("DOMContentLoaded", function () {
    // Кнопка на первой странице
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", function () {
        // Переход ко второй странице
        window.location.href = "/page2"; // Здесь вы замените на актуальный URL вашей второй страницы
    });

    // Кнопки для карточек на второй странице
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            // Выводим список игроков для выбранной карточки
            const playersList = getPlayersList(index); // Функция, которая возвращает список игроков для карточки
            alert(Игроки на позиции ${ index + 1}: ${ playersList.join(", ") });
    });
});
});

// Функция для получения списка игроков по позиции
function getPlayersList(position) {
    const players = {
        0: ["Игрок 1", "Игрок 2", "Игрок 3"],
        1: ["Игрок 4", "Игрок 5", "Игрок 6"],
        2: ["Игрок 7", "Игрок 8", "Игрок 9"],
        3: ["Игрок 10", "Игрок 11", "Игрок 12"],
        4: ["Игрок 13", "Игрок 14", "Игрок 15"],
        5: ["Игрок 16", "Игрок 17", "Игрок 18"],
        6: ["Игрок 19", "Игрок 20", "Игрок 21"]
    };
    return players[position] || [];
}
