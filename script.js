document.addEventListener("DOMContentLoaded", function () {
    const players = {
        goalkeeper: [
            { name: "Алисон", team: "Ливерпуль", logo: "images/logos/liverpool.png" },
            { name: "Нойер", team: "Бавария", logo: "images/logos/bayern.png" },
            { name: "Куртуа", team: "Реал", logo: "images/logos/real_madrid.png" }
        ],
        defender: [
            { name: "Рамос", team: "ПСЖ", logo: "images/logos/psg.png" },
            { name: "Ван Дейк", team: "Ливерпуль", logo: "images/logos/liverpool.png" },
            { name: "Кимпембе", team: "ПСЖ", logo: "images/logos/psg.png" }
        ],
        midfielder: [
            { name: "Де Брюйне", team: "Манчестер Сити", logo: "images/logos/mancity.png" },
            { name: "Кроос", team: "Реал", logo: "images/logos/real_madrid.png" },
            { name: "Модрич", team: "Реал", logo: "images/logos/real_madrid.png" }
        ],
        forward: [
            { name: "Месси", team: "Интер Майами", logo: "images/logos/inter_miami.png" },
            { name: "Роналду", team: "Аль-Наср", logo: "images/logos/al_nassr.png" },
            { name: "Холанд", team: "Манчестер Сити", logo: "images/logos/mancity.png" }
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
