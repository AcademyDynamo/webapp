document.addEventListener("DOMContentLoaded", function () {
    const players = {
        goalkeeper: [
            { name: "Алисон", team: "Ливерпуль", logo: "liverpool_logo.png" },
            { name: "Нойер", team: "Бавария", logo: "bayern_logo.png" },
            { name: "Куртуа", team: "Реал", logo: "real_madrid_logo.png" }
        ],
        defender: [
            { name: "Рамос", team: "ПСЖ", logo: "psg_logo.png" },
            { name: "Ван Дейк", team: "Ливерпуль", logo: "liverpool_logo.png" },
            { name: "Кимпембе", team: "ПСЖ", logo: "psg_logo.png" }
        ],
        midfielder: [
            { name: "Де Брюйне", team: "Манчестер Сити", logo: "mancity_logo.png" },
            { name: "Кроос", team: "Реал", logo: "real_madrid_logo.png" },
            { name: "Модрич", team: "Реал", logo: "real_madrid_logo.png" }
        ],
        forward: [
            { name: "Месси", team: "Интер Майами", logo: "inter_miami_logo.png" },
            { name: "Роналду", team: "Аль-Наср", logo: "al_nassr_logo.png" },
            { name: "Холанд", team: "Манчестер Сити", logo: "mancity_logo.png" }
        ]
    };

    const playersList = document.getElementById("playersList");

    document.querySelectorAll(".shirt").forEach(shirt => {
        shirt.addEventListener("click", function () {
            const position = this.dataset.position;
            showPlayers(position);
        });
    });

    function showPlayers(position) {
        playersList.innerHTML = "";
        players[position].forEach(player => {
            const li = document.createElement("li");
            li.innerHTML = <img src="${player.logo}" alt="${player.team}"> ${player.name} (${player.team});
            playersList.appendChild(li);
        });
    }
});
