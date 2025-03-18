const players = [
    { name: "Игрок 1", image: "shirt-icon.png" },
    { name: "Игрок 2", image: "shirt-icon.png" },
    { name: "Игрок 3", image: "shirt-icon.png" },
    { name: "Игрок 4", image: "shirt-icon.png" },
    { name: "Игрок 5", image: "shirt-icon.png" },
    { name: "Игрок 6", image: "shirt-icon.png" },
    { name: "Игрок 7", image: "shirt-icon.png" }
];

const substitutes = [
    { name: "Запасной 1" },
    { name: "Запасной 2" },
    { name: "Запасной 3" },
    { name: "Запасной 4" },
    { name: "Запасной 5" }
];

const playerElements = document.querySelectorAll(".player");
const playerList = document.getElementById("player-list");

let activePlayerIndex = null;

// Открытие списка запасных
playerElements.forEach((player, index) => {
    player.addEventListener("click", () => {
        activePlayerIndex = index;
        showPlayerList();
    });
});

function showPlayerList() {
    playerList.innerHTML = "";
    substitutes.forEach((sub) => {
        const option = document.createElement("div");
        option.classList.add("player-option");
        option.textContent = sub.name;
        option.addEventListener("click", () => changePlayer(sub));
        playerList.appendChild(option);
    });
    playerList.classList.add("visible");
}

// Замена игрока
function changePlayer(sub) {
    if (activePlayerIndex !== null) {
        players[activePlayerIndex].name = sub.name;
        updateUI();
    }
    closePlayerList();
}

// Закрытие списка запасных
function closePlayerList() {
    playerList.classList.remove("visible");
}

// Обновление UI
function updateUI() {
    playerElements.forEach((player, index) => {
        player.querySelector(".player-name").textContent = players[index].name;
    });
}

// Закрытие списка при клике вне его
document.addEventListener("click", (event) => {
    if (!playerList.contains(event.target) && !event.target.closest(".player")) {
        closePlayerList();
    }
});
