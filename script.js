document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const cards = document.querySelectorAll(".card");

    // Переход на вторую страницу
    startButton.addEventListener("click", function () {
        page1.style.display = "none";
        page2.style.display = "flex";
    });

    // Обработка нажатия на карточку
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const id = this.dataset.id;
            const playersList = getPlayersList(id);
            alert(Игроки на позиции ${ id }: ${ playersList.join(", ") });
        });
    });
});

// Функция возвращает список игроков для каждой карточки
function getPlayersList(position) {
    const players = {
        1: ["Игрок 1", "Игрок 2", "Игрок 3"],
        2: ["Игрок 4", "Игрок 5", "Игрок 6"],
        3: ["Игрок 7", "Игрок 8", "Игрок 9"],
        4: ["Игрок 10", "Игрок 11", "Игрок 12"],
        5: ["Игрок 13", "Игрок 14", "Игрок 15"],
        6: ["Игрок 16", "Игрок 17", "Игрок 18"],
        7: ["Игрок 19", "Игрок 20", "Игрок 21"]
    };
    return players[position] || ["Нет данных"];
}
