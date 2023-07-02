import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

function HomePage() {
  const [notes, setNotes] = useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    let response = await fetch("/api/notes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  }

  return (
    <div>
      <p>Welcome to the home page!</p>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
