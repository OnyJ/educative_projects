import { useState } from "react";

export default function AddPlayersPage() {
  const [players, setPlayers] = useState([]);

  function handleAddPlayer(event) {
    event.preventDefault(); // éviter que la page se recharge

    if (players.length === 2) {
      console.error("Le nombre max de joueurs a été atteint");
      return;
    }

    const playerName = event.target[0].value;
    const newPlayer = { name: playerName, score: 0, action: "" };

    setPlayers([...players, newPlayer]);
    event.target.reset();

    if (players.length === 1) {
      alert("Redirect, game starts !");
    }
  }

  return (
    <>
      <h1>Rock Paper Scissors !</h1>
      <h2>Add Players Page</h2>

      <form id="add-player-form" onSubmit={handleAddPlayer}>
        <label for="player-name">Player Name:</label>
        <input type="text" id="player-name" required />
        <br />
        <button type="submit">Add Player</button>
      </form>

      <div>
        <h2>Joueurs</h2>
        <ul id="players-list">
          {players.map((player, index) => (
            <li key={index}>{player.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
