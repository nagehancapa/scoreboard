import "./Player.scss";

export default function Player(props) {
  const handleClick = () => {
    console.log("clicked");
    props.incrementScore(props.id);
  };

  return (
    <div className="Player">
      <ul>
        <li className="Player">
          <div
            className="percentage_coloring"
            style={{ width: props.score + "%" }}
          />
          <p>
            {props.name} score: {props.score}{" "}
            <button onClick={handleClick}>increment</button>
          </p>
        </li>
      </ul>
    </div>
  );
}
