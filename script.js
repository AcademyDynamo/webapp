document.addEventListener("DOMContentLoaded", function () {
    const players = {
        goalkeeper: ["Алисон", "Нойер", "Куртуа"],
        defender: ["Рамос", "Ван Дейк", "Кимпембе"],
        midfielder: ["Де Брюйне", "Кроос", "Модрич"],
        forward: ["Месси", "Роналду", "Холанд"]
    };

    const team = [];
    const maxPlayers = 4;

    const playersList = document.getElementById("playersList");
    const teamList = document.getElementById("teamList");
    const sendTeamButton = document.getElementById("sendTeam");

    document.querySelectorAll(".position-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const position = this.dataset.position;
            showPlayers(position);
        });
    });

    function showPlayers(position) {
        playersList.innerHTML = "";
        players[position].forEach(player => {
            const li = document.createElement("li");
            li.textContent = player;
            li.addEventListener("click", function () {
                addToTeam(player);
            });
            playersList.appendChild(li);
        });
    }

    function addToTeam(player) {
        if (team.length >= maxPlayers) {
            alert("Максимум 4 игрока!");
            return;
        }
        if (!team.includes(player)) {
            team.push(player);
            updateTeamList();
        }
    }

    function updateTeamList() {
        teamList.innerHTML = "";
        team.forEach(player => {
            const li = document.createElement("li");
            li.textContent = player;
            teamList.appendChild(li);
        });
    }

    sendTeamButton.addEventListener("click", function () {
        if (team.length < maxPlayers) {
            alert("Выбери 4 игроков!");
            return;
        }
        
        const teamData = JSON.stringify(team);
        
        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData(teamData);
            Telegram.WebApp.close();
        } else {
            alert("Telegram WebApp API не поддерживается.");
        }
    });
});
