import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Divider, Grid, ListItemAvatar, Stack } from "@mui/material";
import { IMatch } from "../../shared/types";
import dayjs from "dayjs";

interface IProps {
  match: IMatch;
}
const MatchListItem: React.FC<IProps> = ({ match }) => {
  const displayValueBasedOnMatchStatus = (
    value: React.ReactNode,
    comparator: boolean
  ): Record<string, React.ReactNode> => {
    if (comparator) {
      return { primary: value };
    } else {
      return { secondary: value };
    }
  };

  return (
    <ListItem key={match.id} sx={{ padding: "8px" }}>
      <Grid container spacing={1} columns={16}>
        <Grid item xs={3}>
          <Stack direction="column">
            <ListItemText secondary={`Round ${match.round}`} />
            <ListItemText
              secondary={dayjs(match.startTime).format("DD.MM.YYYY")}
            />
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs>
          <Stack direction="column">
            <ListItem sx={{ padding: "0px" }}>
              <ListItemAvatar sx={{ minWidth: "32px" }}>
                <Avatar
                  src={match.team1.teamLogo}
                  alt="team1 logo"
                  variant="square"
                  sx={{ width: 16, height: 16 }}
                />
              </ListItemAvatar>
              <ListItemText
                {...displayValueBasedOnMatchStatus(
                  match.team1.name,
                  match.result
                    ? match.result.team1Score > match.result.team2Score
                    : true
                )}
              />
            </ListItem>
            <ListItem sx={{ padding: "0px" }}>
              <ListItemAvatar sx={{ minWidth: "32px" }}>
                <Avatar
                  src={match.team2.teamLogo}
                  alt="team1 logo"
                  variant="square"
                  sx={{ width: 16, height: 16 }}
                />
              </ListItemAvatar>
              <ListItemText
                {...displayValueBasedOnMatchStatus(
                  match.team1.name,
                  match.result
                    ? match.result.team2Score > match.result.team1Score
                    : true
                )}
              />
            </ListItem>
          </Stack>
        </Grid>

        <Grid item xs={0}>
          <Stack direction="column">
            <ListItem sx={{ padding: "0px" }}>
              <ListItemText
                {...displayValueBasedOnMatchStatus(
                  match.result?.team1Score,
                  match.result
                    ? match.result.team1Score > match.result.team2Score
                    : true
                )}
              />
            </ListItem>
            <ListItem sx={{ padding: "0px" }}>
              <ListItemText
                {...displayValueBasedOnMatchStatus(
                  match.result?.team2Score,
                  match.result
                    ? match.result.team2Score > match.result.team1Score
                    : true
                )}
              />
            </ListItem>
          </Stack>
        </Grid>
        <Grid item xs={0}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={2}>
          {/* to create spacing near end*/}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default MatchListItem;
