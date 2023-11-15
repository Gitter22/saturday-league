import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const AppHeader = () => {
  const [receiveNotification, setReceiveNotification] = useState(true);

  const handleNotificationButtonClick = () => {
    setReceiveNotification((value) => !value);
  };

  //Todo: Find alternative to AppBar position="sticky"

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="app-logo"
            sx={{ mr: 2 }}
          >
            <SportsSoccerIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block" } }}
          >
            SaturdayLeague
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleNotificationButtonClick}
          >
            {receiveNotification ? (
              <NotificationsActiveIcon />
            ) : (
              <NotificationsOffIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
