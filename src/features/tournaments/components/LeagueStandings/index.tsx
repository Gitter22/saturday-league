import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Chip, Stack, Typography } from "@mui/material";
import { getRandomSeasonTeam } from "../../../shared/constants";
import { ISeasonTeam } from "../../../shared/types";
import { useState } from "react";

interface Data {
  id: number;
  rank: number;
  name: ISeasonTeam;
  played: number;
  wins: number;
  draw: number;
  loss: number;
  appearance: number;
  noshow: number;
  points: number;
}

function createData(
  id: number,
  rank: number,
  name: ISeasonTeam,
  played: number,
  wins: number,
  draw: number,
  loss: number,
  appearance: number,
  noshow: number,
  points: number
): Data {
  return {
    id,
    rank,
    name,
    played,
    wins,
    draw,
    loss,
    appearance,
    noshow,
    points,
  };
}

const rows = [
  createData(1, 1, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(2, 2, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(3, 3, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(4, 4, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(5, 5, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(6, 6, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(7, 7, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(8, 8, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(9, 9, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(10, 10, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(11, 11, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(12, 12, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(13, 13, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(14, 14, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(15, 15, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(16, 16, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
  createData(17, 17, getRandomSeasonTeam(), 12, 6, 3, 1, 9, 1, 22),
];

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  shortView: boolean;
}

const headCells: HeadCell[] = [
  {
    id: "rank",
    numeric: true,
    disablePadding: false,
    label: "#",
    shortView: true,
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Team",
    shortView: true,
  },
  {
    id: "played",
    numeric: true,
    disablePadding: false,
    label: "P",
    shortView: true,
  },
  {
    id: "wins",
    numeric: true,
    disablePadding: false,
    label: "W",
    shortView: false,
  },
  {
    id: "draw",
    numeric: true,
    disablePadding: false,
    label: "D",
    shortView: false,
  },
  {
    id: "loss",
    numeric: true,
    disablePadding: false,
    label: "L",
    shortView: false,
  },
  {
    id: "appearance",
    numeric: true,
    disablePadding: false,
    label: "A",
    shortView: true,
  },
  {
    id: "noshow",
    numeric: true,
    disablePadding: false,
    label: "NS",
    shortView: false,
  },
  {
    id: "points",
    numeric: true,
    disablePadding: false,
    label: "Pts",
    shortView: true,
  },
];

interface IEnhancedTableHead {
  columns: HeadCell[];
}
function EnhancedTableHead({ columns }: IEnhancedTableHead) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            // style={{ width: headCell.label === "Team" ? "80px" : "20px" }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
interface IEnhancedToolBarProps {
  value: string;
  onChange: (value: string) => void;
}
function EnhancedTableToolbar({ value, onChange }: IEnhancedToolBarProps) {
  const handleClick = (buttonName: string) => {
    onChange(buttonName);
  };
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Stack direction="row" spacing={1}>
        <Chip
          label="Short view"
          color="primary"
          variant={value === "short" ? "filled" : "outlined"}
          onClick={() => handleClick("short")}
        />
        <Chip
          label="Full View"
          color="primary"
          variant={value === "full" ? "filled" : "outlined"}
          onClick={() => handleClick("full")}
        />
      </Stack>
    </Toolbar>
  );
}

const LeagueStandings = () => {
  const [viewMode, setViewMode] = useState<string>("short");

  const handleViewMode = (value: string) => {
    setViewMode(value);
  };
  const handleTeamClick = (teamId: string) => {
    console.log("🚀 ~ file: index.tsx:198 ~ handleTeamClick ~ teamId:", teamId);
  };

  const filteredHeadCells: HeadCell[] =
    viewMode === "full" ? headCells : headCells.filter((e) => e.shortView);
  return (
    <Box sx={{ width: "100%" }} p={1}>
      <EnhancedTableToolbar value={viewMode} onChange={handleViewMode} />
      <TableContainer>
        <Table
          sx={{ minWidth: 350 }}
          aria-labelledby="tableTitle"
          size={"medium"}
        >
          <EnhancedTableHead columns={filteredHeadCells} />
          <TableBody>
            {rows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow
                  hover
                  onClick={() => handleTeamClick(row.name.id)}
                  tabIndex={-1}
                  key={row.id}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell component="th" id={labelId} scope="row">
                    <Avatar
                      sx={{
                        width: "24px",
                        height: "24px",
                        backgroundColor:
                          row.rank < 4
                            ? "green"
                            : row.rank < 14
                            ? "white"
                            : "maroon",
                        color:
                          row.rank < 4
                            ? "white"
                            : row.rank < 14
                            ? "inherit"
                            : "white",
                        fontSize: "16px",
                      }}
                    >
                      {row.rank}
                    </Avatar>
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    sx={{ minWidth: 160 }}
                  >
                    <Stack
                      direction="row"
                      sx={{
                        flexGrow: 1,
                        alignItems: "center",
                      }}
                      spacing={1}
                    >
                      <Avatar
                        sx={{
                          width: "24px",
                          height: "24px",
                        }}
                        src={row.name.favClub.logo.small ?? ""}
                      />

                      <Typography variant="body2" noWrap component="span">
                        {row.name.displayName}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">{row.played}</TableCell>
                  {viewMode === "full" ? (
                    <>
                      {" "}
                      <TableCell align="right">{row.wins}</TableCell>
                      <TableCell align="right">{row.draw}</TableCell>
                      <TableCell align="right">{row.loss}</TableCell>
                    </>
                  ) : null}
                  <TableCell align="right">{row.appearance}</TableCell>
                  {viewMode === "full" ? (
                    <TableCell align="right">{row.noshow}</TableCell>
                  ) : null}
                  <TableCell align="right">{row.points}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeagueStandings;
