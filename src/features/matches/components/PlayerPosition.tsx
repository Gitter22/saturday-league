import React, { PropsWithChildren } from "react";
import { Avatar, Badge, Box } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import { IPosition } from "../formations";
import { IMatchPlayer, IUser } from "../../shared/types";
import {
  PitchPlayer,
  PlayerSelectorItem,
  PositionInfo,
} from "./PlayerSelector";
import { getRandomUser } from "../../shared/constants";

interface IPitchPositionPlayer extends IPosition {
  player?: IMatchPlayer | null;
}
interface IPitchPosition {
  position: IPitchPositionPlayer;
  teamPosition: number;
}

const PitchPosition: React.FC<PropsWithChildren<IPitchPosition>> = ({
  position,
  teamPosition,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `${teamPosition}:${position.id}`,
    data: {
      type: "pitchposition",
    },
  });

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
      }}
    >
      {position.player ? (
        <PitchPlayer player={position.player} showRatings={false} />
      ) : (
        <PositionInfo position={position} isDropping={isOver} />
      )}
    </Box>
  );
};

export default PitchPosition;
