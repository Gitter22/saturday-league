import { Box, Typography, styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const LeagueDetails = () => {
  return (
    <Box>
      <Typography>SaturdayLeague</Typography>
      <Typography>SaturdayLeague</Typography>
      <BorderLinearProgress variant="determinate" value={50} />
    </Box>
  );
};

export default LeagueDetails;
