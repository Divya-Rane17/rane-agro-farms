import { useState } from "react";

function App() {
  const [workers, setWorkers] = useState([]);
  const [name, setName] = useState("");
  const [village, setVillage] = useState("");
  const [wage, setWage] = useState("");

  const addWorker = async () => {
    const worker = {
      name: name,
      village: village,
      wage: Number(wage)
    };

    const response = await fetch("https://rane-agro-farms-backend.onrender.com/workers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(worker)
    });

    const data = await response.json();

    setWorkers([...workers, data.worker]);

    setName("");
    setVillage("");
    setWage("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>RANE AGRO FARMS</h1>

      <h2>Worker Registration</h2>

      <input
        placeholder="Worker Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Village"
        value={village}
        onChange={(e) => setVillage(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Daily Wage"
        value={wage}
        onChange={(e) => setWage(e.target.value)}
      />

      <br /><br />

      <button onClick={addWorker}>
        Add Worker
      </button>

      <h2>Registered Workers</h2>

      {workers.map((worker, index) => (
        <p key={index}>
          {worker.name} - {worker.village} - ₹{worker.wage}
        </p>
      ))}
    </div>
  );
}

export default App;