import { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      alert("please provide a name");
      return;
    }

    if (name.length <= 1) {
      alert("name has to be longer");
      return;
    }

    props.addPlayer(name);
    setName("");
  };

  return (
    <div className="AddPlayerFrom">
      <form onSubmit={handleSubmit}>
        <p>
          New player:{" "}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />{" "}
          <button>Add</button>
        </p>
      </form>
    </div>
  );
}
