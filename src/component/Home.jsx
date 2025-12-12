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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-5">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Join Video Meeting
        </h1>

        <div className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Room ID
            </label>
            <input
              type="text"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
            />
          </div>

          <button
            onClick={handleJoin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}
