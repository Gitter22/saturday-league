import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, []);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Matches"
            icon={<SportsSoccerIcon />}
            component={Link}
            to="/matches"
          />
          <BottomNavigationAction
            label="Leagues"
            icon={<EmojiEventsIcon />}
            component={Link}
            to="/leagues"
          />
          <BottomNavigationAction
            label="Players"
            icon={<SportsGymnasticsIcon />}
            component={Link}
            to="/players"
          />
          <BottomNavigationAction
            label="Menu"
            icon={<MenuIcon />}
            // to="/leagues"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
