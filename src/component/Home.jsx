import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleJoin = () => {
    if (!roomId || !name) {
      alert("Please enter both Name and Room ID");
      return;
    }

    navigate(`/room/${roomId}`, { state: { name } });
  };

  return (
    <div className="flex flex-col gap-4 p-10">
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        className="border p-2"
      />

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />

      <button onClick={handleJoin} className="bg-blue-500 text-white p-2 rounded">
        Join Room
      </button>
    </div>
  );
}
