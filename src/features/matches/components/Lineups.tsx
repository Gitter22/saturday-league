import {
  Avatar,
  Box,
  Button,
  Paper,
  Select,
  Stack,
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

import PlayerList from "./PlayerList";
import Pitch from "./Pitch";
import Draggable from "./Draggable";
import PlayerPosition from "./PlayerPosition";

const Lineups = () => {
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
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
      </Box>
      <DndContext onDragEnd={handleDragEnd}>
        <Box p={1}>
          Team 1
          <Select placeholder="formation" size="small" />
        </Box>
        <Box overflow={"scroll"} p={1}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 32, height: 32 }}>+</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>R</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>G</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>J</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>R</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>G</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>J</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>J</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>J</Avatar>
            <Avatar sx={{ width: 32, height: 32 }}>J</Avatar>

            {/* <Typography variant="body2">Add Players</Typography> */}
          </Stack>
        </Box>
        <Pitch>
          {!isDropped ? draggableMarkup : null}
          <PlayerPosition>
            {isDropped ? draggableMarkup : "Drop here"}
          </PlayerPosition>
          {/* <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Team A
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Odegaard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Saka" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Ramsdale" />
          </ListItemButton>
        </List> */}
        </Pitch>
      </DndContext>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Team B
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Emile Smith Rowe" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Raya" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Nketiah" />
        </ListItemButton>
      </List>
      <Button variant="contained" fullWidth onClick={handleClickOpen}>
        Save Lineup
      </Button>
      <PlayerList open={open} onClose={handleClose} />
    </>
  );
};

export default Lineups;
