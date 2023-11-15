import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";

interface IPlayerPosition {
  position?: {
    teamPosition: 1 | 2;
    top: string;
    left: string;
  };
}

const PlayerPosition: React.FC<PropsWithChildren<IPlayerPosition>> = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    backgroundColor: isOver ? "green" : "gray",
  };
  return (
    <Box
      ref={setNodeRef}
      sx={{
        position: "absolute",
        width: 50,
        height: 50,
        top: "50%",
        left: "50%",
        borderRadius: "50%",
        transform: `translate(-50%, -50%)`,
        ...style,
      }}
    />
  );
};

export default PlayerPosition;
