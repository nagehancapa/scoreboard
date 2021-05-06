import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import { useState } from "react";
import "./Scoreboard.scss";

function compareScore(playerA, playerB) {
  return playerB.score - playerA.score;
}

function compareName(playerA, playerB) {
  return playerA.name.localeCompare(playerB.name);
}

export default function Scoreboard() {
  const playersData = [
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ];

  const [players, setPlayers] = useState(playersData);
  const [sortBy, setSortBy] = useState("score");

  const changeSorting = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };

  const playersSorted =
    sortBy === "score"
      ? [...players].sort(compareScore)
      : [...players].sort(compareName);

  const incrementScore = (id) => {
    const updatedArray = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    setPlayers(updatedArray);
  };

  const resetScores = () => {
    const newPlayersArray = players.map((player) => ({
      ...player,
      score: 0,
    }));
    setPlayers(newPlayersArray);
  };

  const randomizeScores = () => {
    const newPlayersArray = players.map((player) => ({
      ...player,
      score: Math.floor(Math.random() * 101),
    }));
    setPlayers(newPlayersArray);
  };

  const addPlayer = (name) => {
    setPlayers([...players, { id: players.length + 1, name, score: 0 }]);
  };

  return (
    <div className="Scoreboard">
      <button onClick={resetScores}>Reset Scores</button>{" "}
      <button onClick={randomizeScores}>Randomize Scores</button>
      <br />
      <br />
      <p>
        Sort order:{" "}
        <select onChange={changeSorting} value={sortBy}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <ul>
        {playersSorted.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
