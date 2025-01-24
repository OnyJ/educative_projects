export default function AddPlayersPage() {
  return (
    <>
      <h1>Rock Paper Scissors !</h1>
      <h2>Add Players Page</h2>

      <form id="add-player-form">
        <label for="player-name">Player Name:</label>
        <input type="text" id="player-name" required />
        <button type="submit">Add Player</button>
      </form>

      <div>
        <ul id="players-list"></ul>
      </div>
    </>
  );
}
