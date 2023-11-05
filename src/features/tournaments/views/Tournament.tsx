import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Tab, Tabs } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import LeagueStandings from "../components/LeagueStandings";
import Matches from "../components/Matches";
import TopPlayers from "../components/Top Players";
import LeagueDetails from "../components/Details";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Tournament() {
  const { id } = useParams();
  const navigate = useNavigate();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: "flex-end" }}
            >
              <Button color="inherit" onClick={() => navigate("/")}>
                Back
              </Button>
              Saturday League
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </StyledToolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Standings" {...a11yProps(1)} />
            <Tab label="Matches" {...a11yProps(2)} />
            <Tab label="Top players" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <LeagueDetails />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <LeagueStandings />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Matches />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <TopPlayers />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
}
