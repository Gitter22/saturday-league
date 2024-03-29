import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Leagues from "./features/leagues/views/Leagues";
import Tournament from "./features/tournaments/views/Tournament";
import MatchesHome from "./features/matches/views";
import AddMatch from "./features/tournaments/components/Matches/AddMatch/AddMatch";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MatchDetail from "./features/matches/views/MatchDetail";
import AppMenu from "./features/menu/views";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/matches" />} />
            <Route path="matches" element={<MatchesHome />} />
            <Route path="leagues" element={<Leagues />} />
            <Route path="menu" element={<AppMenu />} />
            <Route path="players" element={<div>Players Page</div>} />
          </Route>
          <Route path="/tournament/:id" element={<Tournament />} />
          <Route path="/tournament/:id/add-match" element={<AddMatch />} />
          <Route path="/match/:id" element={<MatchDetail />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
