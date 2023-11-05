import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Divider, Stack } from "@mui/material";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const Matches = () => {
  return (
    <List
      sx={{
        width: "100%",
        // maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        // maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{months[sectionId]}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={1}
                  flexGrow={"2"}
                >
                  {/* <Stack direction="column">
                    <ListItemText secondary="#" />
                    <ListItemText primary="1" />
                  </Stack> */}
                  <Stack direction="column">
                    <ListItemText secondary="Round 3" />
                    <ListItemText secondary="28.03.2023" />
                  </Stack>
                  <Stack direction="column" flexGrow={2}>
                    <ListItemText primary="Arsenal" />
                    <ListItemText secondary="Manchester United" />
                  </Stack>
                  <Stack direction="column">
                    <ListItemText primary="3" />
                    <ListItemText secondary="0" />
                  </Stack>
                </Stack>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default Matches;
