import * as React from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Leagues from "./features/leagues/views/Leagues";
import Tournament from "./features/tournaments/views/Tournament";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/matches" />} />
          <Route path="matches" element={<div>Matches</div>} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="players" element={<div>Players Page</div>} />
        </Route>
        <Route path="/tournament/:id" element={<Tournament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
