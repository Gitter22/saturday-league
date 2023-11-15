import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";
import { ListItem } from "@mui/material";
import { getSeasonList } from "../../shared/constants";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { getSeasonName } from "../support";

const Leagues = () => {
  const navigate = useNavigate();
  const seasonList = getSeasonList(5);

  return (
    <>
      <Typography sx={{ padding: "8px" }} variant="h6">
        Leagues
      </Typography>
      <List dense={true}>
        {seasonList.map((season) => (
          <ListItemButton
            key={season.id}
            onClick={() => navigate("/tournament/123")}
          >
            <ListItem>
              <ListItemIcon>
                <SportsSoccerIcon />
              </ListItemIcon>
              <ListItemText
                primary={season.tournament.name}
                secondary={getSeasonName(season)}
              />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default Leagues;
