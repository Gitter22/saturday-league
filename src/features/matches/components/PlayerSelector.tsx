import {
  Avatar,
  AvatarProps,
  Badge,
  Box,
  Paper,
  Stack,
  Typography,
  TypographyProps,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
import { getUserList } from "../../shared/constants";
import { IMatchPlayer, ISeasonPlayer } from "../../shared/types";
import { useDroppable } from "@dnd-kit/core";
import { deepOrange, green } from "@mui/material/colors";
import { IPosition } from "../formations";
import { useDraggable } from "@dnd-kit/core";

interface PlayerLogo extends AvatarProps {
  player: ISeasonPlayer;
}
const PlayerLogo: React.FC<PlayerLogo> = ({ player, ...props }) => {
  return (
    <Avatar
      {...props}
      sx={{
        width: 40,
        height: 40,
      }}
      alt={player.favClub.name}
      src={player.favClub.logo.large}
    />
  );
};

interface PlayerRating extends AvatarProps {
  rating: number;
}
const PlayerRating: React.FC<PlayerRating> = ({ rating, ...props }) => {
  return (
    <Avatar
      {...props}
      variant={"rounded"}
      sx={{
        width: 24,
        height: 24,
        bgcolor: deepOrange[500],
        fontWeight: 600,
        lineHeight: 0,
        fontSize: "0.8em",
      }}
      alt={`${rating}`}
    >
      {rating}
    </Avatar>
  );
};

interface PlayerKitNumber extends AvatarProps {
  player: ISeasonPlayer;
}

const PlayerKitNumber: React.FC<PlayerKitNumber> = ({ player, ...props }) => {
  return (
    <Avatar
      {...props}
      sx={{
        width: 18,
        height: 18,
        backgroundColor: player.favClub.colors?.primary,
        fontWeight: 600,
        border: "2px solid #FFF",
        lineHeight: 0,
        fontSize: "0.8em",
      }}
      alt={`${player.kitNumber}`}
    >
      {player.kitNumber}
    </Avatar>
  );
};

interface IPlayerName extends TypographyProps {}

const PlayerName: React.FC<PropsWithChildren<IPlayerName>> = ({
  children,
  ...props
}) => (
  <Typography {...props} variant="subtitle2">
    {children}
  </Typography>
);

interface IPositionInfo extends AvatarProps {
  position: IPosition;
  isDropping: boolean;
}

export const PositionInfo: React.FC<IPositionInfo> = ({
  position,
  isDropping,
}) => {
  return (
    <Avatar
      sx={{
        width: 40,
        height: 40,
        backgroundColor: isDropping ? green["A400"] : "gray",
        fontSize: "1em",
        lineHeight: 0,
        border: isDropping ? "3px solid #FFF" : undefined,
      }}
      alt={position.id}
    >
      {position?.id}
    </Avatar>
  );
};

interface IPitchPlayer {
  player: IMatchPlayer;
  showRatings: boolean;
}

export const PitchPlayer: React.FC<IPitchPlayer> = ({
  player,
  showRatings,
}) => {
  return (
    <Stack direction="column" alignItems={"center"}>
      <Stack direction="row" alignItems={"center"} spacing={0.5}>
        {showRatings ? (
          <PlayerRating rating={7} />
        ) : (
          <Box sx={{ width: 12, height: 24, visibility: "hidden" }} />
        )}
        <PlayerLogo player={player} />
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={0.5}>
        <PlayerKitNumber player={player} />
        <PlayerName>{player.displayName.slice(0, 10)}</PlayerName>
      </Stack>
    </Stack>
  );
};

interface IPlayerSelectorItemProps {
  player: ISeasonPlayer;
}
export const PlayerSelectorItem: React.FC<IPlayerSelectorItemProps> = ({
  player,
}) => {
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: player.id,
  });
  return (
    <Stack
      direction="column"
      alignItems={"center"}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <PlayerLogo player={player} />
      <PlayerName>{player.displayName.slice(0, 10)}</PlayerName>
    </Stack>
  );
};

interface IProps {
  players: ISeasonPlayer[];
}

const PlayerSelector: React.FC<IProps> = ({ players }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "playerSelector",
  });

  return (
    <Paper elevation={2} ref={setNodeRef} sx={{ opacity: isOver ? 0.4 : 1 }}>
      <Box p={1} sx={{ overflowX: "auto" }}>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          {players.map((player) => (
            <PlayerSelectorItem key={player.id} player={player} />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default PlayerSelector;
