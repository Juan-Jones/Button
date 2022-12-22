import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      {isLoggedIn ? "Logged in" : "logged out"}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      <h1>Logged In Button</h1>
      <h2>Create a button.</h2>
    </div>
  );
}
