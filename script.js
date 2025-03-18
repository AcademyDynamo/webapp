document.addEventListener("DOMContentLoaded", function () {
    const playersData = {
        forward: [
            { name: "Месси", team: "Интер Майами", logo: "images/logos/inter_miami.png" },
            { name: "Холанд", team: "Манчестер Сити", logo: "images/logos/mancity.png" },
            { name: "Мбаппе", team: "ПСЖ", logo: "images/logos/psg.png" }
        ]
    };

    let selectedShirt = null;
    const playersListContainer = document.querySelector(".players");
    const playersList = document.getElementById("playersList");

    document.querySelector(".shirt").addEventListener("click", function () {
        selectedShirt = this;
        showPlayers("forward");
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
            const prevPlayer = {
                name: selectedShirt.querySelector(".player-name").textContent,
                logo: selectedShirt.dataset.logo || "images/logos/default.png"
            };

            selectedShirt.querySelector(".player-name").textContent = player.name;
            selectedShirt.dataset.logo = player.logo;

            const li = document.createElement("li");
            li.innerHTML = <img src="${prevPlayer.logo}" alt="prev">${prevPlayer.name};
            li
