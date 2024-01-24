import {
  AppBar,
  Autocomplete,
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Select,
  Stack,
  TextField,
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
import PitchPosition from "./PlayerPosition";
import { useNavigate } from "react-router-dom";
import PlayerSelector from "./PlayerSelector";
import { IFormation, IPosition, formations } from "../formations";
import {
  getFormationList,
  getRandomMatch,
  getRandomMatchTeam,
  getSeasonPlayerList,
  getUserList,
} from "../../shared/constants";
import {
  IMatch,
  IMatchPlayer,
  IMatchTeam,
  ISeasonPlayer,
  IUser,
} from "../../shared/types";

// const createLineUp = (matchTeam: IMatchTeam) => {
//   if (matchTeam.formation) {
//     const teamformation = formations[matchTeam.formation];

//     const postionWithPlayer = teamformation.positions.map((pitchPosition) => {
//       return {
//         ...pitchPosition,
//         player: matchTeam.lineup
//           ? matchTeam.lineup.find(
//               (player) => player.position == pitchPosition.id
//             )
//           : undefined,
//       };
//     });

//     return {
//       ...teamformation,
//       positions: postionWithPlayer,
//     };
//   } else {
//     return null;
//   }
// };
interface IPositionPlayer extends IPosition {
  player?: IMatchPlayer | null;
}
interface ILineUp extends Omit<IFormation, "positions"> {
  positions: IPositionPlayer[];
  teamPosition: 1 | 2;
}
const EditLineups = () => {
  const formationIds = getFormationList();
  const navigate = useNavigate();
  const [team1Lineup, setTeam1LineUp] = React.useState<ILineUp>({
    id: "",
    teamPosition: 1,
    players: 0,
    positions: [],
  });
  const [team2Lineup, setTeam2LineUp] = React.useState<ILineUp>({
    id: "",
    teamPosition: 2,
    players: 0,
    positions: [],
  });

  const players = getSeasonPlayerList(14);

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
    const { active, over } = event;
    if (!over) {
      return;
    }
    const updaterFunction = (
      lineup: ILineUp,
      currentPlayer: ISeasonPlayer,
      currentPosition: string
    ): ILineUp => {
      return {
        ...lineup,
        positions: lineup.positions.map((position) => {
          if (position.id === currentPosition) {
            return {
              ...position,
              player: currentPlayer,
            };
          } else {
            return position;
          }
        }),
      };
    };
    const player = players.find((p) => p.id == active.id);
    const [teamposition, playerposition] =
      typeof over.id === "string" ? over.id.split(":") : [];
    if (Number(teamposition) === 1) {
      setTeam1LineUp((lineup) =>
        updaterFunction(lineup, player, playerposition)
      );
    } else {
      setTeam2LineUp((lineup) =>
        updaterFunction(lineup, player, playerposition)
      );
    }
  }
  const handleFormationChange = (formationId: string, teamPosition: 1 | 2) => {
    const formation = formations[formationId];
    if (teamPosition === 1) {
      setTeam1LineUp({ ...formation, teamPosition });
    } else {
      setTeam2LineUp({ ...formation, teamPosition });
    }
  };

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

        <Box p={1}>
          <Stack
            direction={"column"}
            alignContent={"center"}
            // justifyContent={"space-evenly"}
            spacing={1}
          >
            <Typography>Team 1</Typography>

            <Autocomplete
              fullWidth
              // getOptionLabel={({ name }) => name}
              disablePortal
              id="formation-selector"
              options={formationIds}
              renderInput={(params) => (
                <TextField {...params} label="Formation" />
              )}
              onChange={(_, value) => handleFormationChange(value as string, 1)}
            />
          </Stack>
        </Box>
        <DndContext onDragEnd={handleDragEnd}>
          <PlayerSelector players={players} />
          <Pitch>
            {team1Lineup && Array.isArray(team1Lineup.positions)
              ? team1Lineup.positions.map((position) => (
                  <PitchPosition
                    position={position}
                    teamPosition={1}
                    key={`1-${position.id}`}
                  />
                ))
              : null}
            {team2Lineup && Array.isArray(team2Lineup.positions)
              ? team2Lineup.positions.map((position) => (
                  <PitchPosition
                    position={position}
                    teamPosition={2}
                    key={`2-${position.id}`}
                  />
                ))
              : null}
          </Pitch>
          <PlayerSelector players={players} />
        </DndContext>
        <Box p={1}>
          <Stack
            direction={"column"}
            alignContent={"center"}
            // justifyContent={"space-evenly"}
            spacing={1}
          >
            <Typography>Team 2</Typography>

            <Autocomplete
              fullWidth
              // getOptionLabel={({ name }) => name}
              disablePortal
              id="formation-selector"
              options={formationIds}
              renderInput={(params) => (
                <TextField {...params} label="Formation" />
              )}
              onChange={(_, value) => handleFormationChange(value as string, 2)}
            />
          </Stack>
        </Box>
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
