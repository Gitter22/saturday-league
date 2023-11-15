import List from "@mui/material/List";

import ListSubheader from "@mui/material/ListSubheader";
import { getRandomMatchList } from "../../shared/constants";
import { groupBy } from "../support";
import { IMatch } from "../../shared/types";
import dayjs from "dayjs";
import MatchListItem from "./MatchListItem";

const Matches = () => {
  const matches = getRandomMatchList(20);
  console.log("🚀 ~ file: MatchList.tsx:12 ~ Matches ~ matches:", matches);
  const groupedByMatches = groupBy<IMatch>(matches, ({ startTime }) =>
    dayjs(startTime).format("MMM YY")
  );
  console.log(
    "🚀 ~ file: MatchList.tsx:14 ~ Matches ~ groupedByMatches:",
    groupedByMatches
  );
  return (
    <List
      dense
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
      {Object.entries(groupedByMatches).map(([month, matchList], index) => (
        <li key={`section-${month}-${index}`}>
          <ul>
            <ListSubheader>{month}</ListSubheader>
            {matchList.map((match) => (
              <MatchListItem match={match} key={match.id} />
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default Matches;
