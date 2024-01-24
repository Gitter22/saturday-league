import { AppBar, IconButton, Toolbar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  Autocomplete,
  Button,
} from "@mui/material";
import dayjs from "dayjs";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { getVenueList } from "../../../../shared/constants";

export default function AddMatch() {
  const venues = getVenueList();

  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Add Match
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ maxWidth: 350, width: "100%", p: 2 }}>
        <>
          <Box sx={{ maxWidth: 350, flexGrow: 1 }}>
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
              <Typography variant="subtitle2">Match Details</Typography>
            </Paper>
          </Box>
          <FormControl fullWidth>
            <Stack direction="column" spacing={3}>
              <Autocomplete
                getOptionLabel={({ name }) => name}
                disablePortal
                id="venue-selector"
                options={venues}
                renderInput={(params) => (
                  <TextField {...params} label="Venue" />
                )}
              />
              <MobileDatePicker
                defaultValue={dayjs("2022-04-17")}
                label="Select Date"
              />
              <MobileTimePicker
                defaultValue={dayjs("2022-04-17T15:30")}
                ampm
                label="Start Time"
              />
              <MobileTimePicker
                defaultValue={dayjs("2022-04-17T15:30")}
                ampm
                label="End Time"
              />
              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate("/match/123")}
              >
                {" "}
                Add Match
              </Button>
            </Stack>
          </FormControl>
        </>
      </Box>
    </Box>
  );
}
