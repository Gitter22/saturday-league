import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import * as React from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import PlayerList from "./PlayerList";
import Pitch from "./Pitch";
import Draggable from "./Draggable";
import PlayerPosition from "./PlayerPosition";
import { useNavigate } from "react-router-dom";
import PlayerSelector from "./PlayerSelector";
import { formations } from "../formations";
import {
  getRandomMatch,
  getRandomMatchTeam,
  getUserList,
} from "../../shared/constants";

const EditLineups = () => {
  const navigate = useNavigate();

  const users = getUserList(14);

  const [open, setOpen] = React.useState(false);
  const [isDropped, setIsDropped] = React.useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
  const team1Formation = formations["2-3-1"];
  const team2Formation = formations["2-2-1"];

  const match = getRandomMatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Add Match
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "100%" }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>Select Teams</Typography>
        </Paper>

        <DndContext onDragEnd={handleDragEnd}>
          <Box p={1}>
            Team 1
            <Select placeholder="formation" size="small" />
          </Box>
          <PlayerSelector players={users} />
          <Pitch>
            {match.team1.lineup.map((player) => (
              <PlayerPosition
                formation={match.team1.formation}
                position={player.position}
                teamPosition={1}
                key={`1-${player.position}`}
                player={player}
              />
            ))}
            {match.team2.lineup.map((player) => (
              <PlayerPosition
                formation={match.team2.formation}
                position={player.position}
                teamPosition={2}
                key={`2-${player.position}`}
                player={player}
              />
            ))}
          </Pitch>
        </DndContext>
        <Box p={1}>
          <Button variant="contained" fullWidth onClick={handleClickOpen}>
            Save Lineup
          </Button>
        </Box>
        <PlayerList open={open} onClose={handleClose} />
      </Box>
    </Box>
  );
};

export default EditLineups;
