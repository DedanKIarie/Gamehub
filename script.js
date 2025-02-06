
const gameForm = document.getElementById('gameForm');

if (gameForm) {
  gameForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const gameThumbnail = document.getElementById('gameThumbnail').value;
    const gameName = document.getElementById('gameName').value;
    const gameDescription = document.getElementById('gameDescription').value;
    const gamePrice = document.getElementById('gamePrice').value;

    if (gameThumbnail == "" || gameName == "" || gameDescription == "" || gamePrice == "") {
      return alert('Please fill in all fields.');
    }

    const gameData = { gameThumbnail, gameName, gameDescription, gamePrice };
    const gameList = JSON.parse(localStorage.getItem('gameList')) || [];
    gameList.push(gameData);
    localStorage.setItem('gameList', JSON.stringify(gameList));

    alert('Game submitted!');
    gameForm.reset();
  });
}
    const loadGames = () => {
      const gameCardSection = document.getElementById('gameCardSection');
      const gameList = JSON.parse(localStorage.getItem('gameList')) || [];
  
      if (gameList.length === 0) {
        gameCardSection.innerHTML = '<p>No games added yet.</p>';
        return;
      }
  
      gameCardSection.innerHTML = gameList.map(game => `
        <div class="game-container">
          <img src="${game.gameThumbnail}" alt="Game Thumbnail" class="game-thumbnail" />
          <div class="game-info">
            <h3>${game.gameName}</h3>
            <p>${game.gameDescription}</p>
            <p class="game-price">Price: Ksh ${game.gamePrice}</p>
          </div>
        </div>
      `).join('');
    };
  
    loadGames();

  