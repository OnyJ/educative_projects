import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddPlayersPage from "./pages/AddPlayersPage";
import BoardPage from "./pages/BoardPage";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Ajouter joueurs</Link> | <Link to="/board">Partie</Link>
      </nav>

      <Routes>
        <Route path="/" exact element={<AddPlayersPage />} />
        <Route path="/board" exact element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
