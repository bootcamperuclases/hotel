import { useEffect, useState } from "react";

function App() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/rooms")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRooms(data);
      });

  }, []);

  return (
    <div>

      <h1>Habitaciones</h1>

      {rooms.map(room => (
        <div key={room.id}>
          <p>Habitacion : {room.room_number}  -  Status: {room.room_status}  </p>
        </div>
      ))}

    </div>
  );
}

export default App;