import { Divider, Typography, Stack } from "@mui/material";
import React from "react";

const MatchBasicDetails = () => {
  return (
    <>
      <Typography variant="body2">Saturday League, Round 3</Typography>
      <Divider />
      <Typography variant="h6">Match Information</Typography>
      <Stack direction="column" spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">Date</Typography>
          <Typography variant="body2">25.11.2023</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">Time</Typography>
          <Typography variant="body2">07:00 - 08:00am</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">Venue</Typography>
          <Typography variant="body2">Gameplex Arena</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default MatchBasicDetails;
