document.addEventListener("DOMContentLoaded", function () {
    const playersData = {
        goalkeeper: [
            { name: "Алисон", team: "Ливерпуль", logo: "images/logos/liverpool.png", shirt: "images/shirts/liverpool.png" },
            { name: "Куртуа", team: "Реал", logo: "images/logos/real_madrid.png", shirt: "images/shirts/real.png" }
        ],
        defender: [
            { name: "Рамос", team: "ПСЖ", logo: "images/logos/psg.png", shirt: "images/shirts/psg.png" },
            { name: "Ван Дейк", team: "Ливерпуль", logo: "images/logos/liverpool.png", shirt: "images/shirts/liverpool.png" }
        ],
        midfielder: [
            { name: "Де Брюйне", team: "Манчестер Сити", logo: "images/logos/mancity.png", shirt: "images/shirts/mancity.png" },
            { name: "Кроос", team: "Реал", logo: "images/logos/real_madrid.png", shirt: "images/shirts/real.png" }
        ],
        forward: [
            { name: "Месси", team: "Интер Майами", logo: "images/logos/inter_miami.png", shirt: "images/shirts/inter_miami.png" },
            { name: "Холанд", team: "Манчестер Сити", logo: "images/logos/mancity.png", shirt: "images/shirts/mancity.png" }
        ]
    };

    let selectedShirt = null;
    const playersListContainer = document.querySelector(".players");
    const playersList = document.getElementById("playersList");

    document.querySelectorAll(".shirt").forEach(shirt => {
        shirt.addEventListener("click", function () {
            selectedShirt = this;
            const position = this.dataset.position;
            showPlayers(position);
        });
    });

    function showPlayers(position) {
        playersList.innerHTML = "";
        playersData[position].forEach(player => {
            const li = document.createElement("li");
            li.innerHTML = <img src="${player.logo}" alt="${player.team}"> ${player.name} (${player.team});
            li.addEventListener("click", () => selectPlayer(player));
            playersList.appendChild(li);
        });

        playersListContainer.style.display = "block";
    }

    function selectPlayer(player) {
        if (selectedShirt) {
            selectedShirt.querySelector("img").src = player.shirt;
            selectedShirt.querySelector(".player-name").textContent = player.name;
        }
        playersListContainer.style.display = "none";
    }
});
