import React, { PropsWithChildren } from "react";
import { Avatar, Badge, Box } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import { IPosition } from "../formations";
import { IUser } from "../../shared/types";
import {
  PitchPlayer,
  PlayerSelectorItem,
  PositionInfo,
} from "./PlayerSelector";
import { getRandomUser } from "../../shared/constants";

interface IPitchPosition {
  position: IPosition;
  teamPosition: number;
  player: IUser | null;
}

const PitchPosition: React.FC<PropsWithChildren<IPitchPosition>> = ({
  formation,
  position,
  teamPosition,
  player,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "position",
  });
  const style = {
    // backgroundColor: isOver ? "green" : "gray",
  };
  const top = teamPosition === 1 ? position.top : 100 - position.top;
  const left = teamPosition === 1 ? position.left : 100 - position.left;
  return (
    <Box
      ref={setNodeRef}
      sx={{
        position: "absolute",
        width: 50,
        height: 50,
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-50%, -50%)`,
        ...style,
      }}
    >
      {player ? (
        <PitchPlayer player={player} showRatings={false} />
      ) : (
        <PositionInfo position={position} />
      )}
    </Box>
  );
};

export default PitchPosition;
