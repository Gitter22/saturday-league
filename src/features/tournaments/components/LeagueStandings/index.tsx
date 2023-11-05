import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Paper, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

interface Data {
  id: number;
  rank: number;
  name: string;
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
  name: string,
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
  createData(1, 1, "Aadil", 12, 6, 3, 1, 9, 1, 22),
  createData(2, 2, "Robin", 12, 6, 3, 1, 9, 1, 22),
  createData(3, 3, "Deepak", 12, 6, 3, 1, 9, 1, 22),
  createData(4, 4, "Keval", 12, 6, 3, 1, 9, 1, 22),
  createData(5, 5, "Sarath", 12, 6, 3, 1, 9, 1, 22),
  createData(6, 6, "Ashish", 12, 6, 3, 1, 9, 1, 22),
  createData(7, 7, "Kenil", 12, 6, 3, 1, 9, 1, 22),
  createData(8, 8, "Ishan", 12, 6, 3, 1, 9, 1, 22),
  createData(9, 9, "Pranav", 12, 6, 3, 1, 9, 1, 22),
  createData(10, 10, "Harsh", 12, 6, 3, 1, 9, 1, 22),
  createData(11, 11, "Gunjan", 12, 6, 3, 1, 9, 1, 22),
  createData(12, 12, "Jani", 12, 6, 3, 1, 9, 1, 22),
  createData(13, 13, "Rajveer", 12, 6, 3, 1, 9, 1, 22),
  createData(14, 14, "Jyot", 12, 6, 3, 1, 9, 1, 22),
  createData(15, 15, "Mithil", 12, 6, 3, 1, 9, 1, 22),
  createData(16, 16, "KP", 12, 6, 3, 1, 9, 1, 22),
  createData(17, 17, "Jinal", 12, 6, 3, 1, 9, 1, 22),
];

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "rank",
    numeric: false,
    disablePadding: false,
    label: "#",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Team",
  },
  {
    id: "played",
    numeric: true,
    disablePadding: false,
    label: "P",
  },
  {
    id: "wins",
    numeric: true,
    disablePadding: false,
    label: "W",
  },
  {
    id: "draw",
    numeric: true,
    disablePadding: false,
    label: "D",
  },
  {
    id: "loss",
    numeric: true,
    disablePadding: false,
    label: "L",
  },
  {
    id: "appearance",
    numeric: true,
    disablePadding: false,
    label: "A",
  },
  {
    id: "noshow",
    numeric: true,
    disablePadding: false,
    label: "NS",
  },
  {
    id: "points",
    numeric: true,
    disablePadding: false,
    label: "Pts",
  },
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar() {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Saturday League
      </Typography>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}
export default function LeagueStandings() {
  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {};

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead />
            <TableBody>
              {rows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.rank}
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.played}</TableCell>
                    <TableCell align="right">{row.wins}</TableCell>
                    <TableCell align="right">{row.draw}</TableCell>
                    <TableCell align="right">{row.loss}</TableCell>
                    <TableCell align="right">{row.appearance}</TableCell>
                    <TableCell align="right">{row.noshow}</TableCell>
                    <TableCell align="right">{row.points}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
