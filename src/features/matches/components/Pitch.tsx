import { Box } from "@mui/material";
import React from "react";
// import pitch from "../../../assets/pitch.png";
import pitch2 from "../../../assets/pitch.svg";

interface IPitchProps {
  children: React.ReactNode;
}

const Pitch: React.FC<IPitchProps> = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        background: `url(${pitch2}) no-repeat center center`,
        backgroundSize: "cover",
        height: 684,
      }}
    >
      {children}
    </Box>
  );
};

export default Pitch;
