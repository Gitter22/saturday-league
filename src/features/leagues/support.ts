import dayjs from "dayjs";
import { ISeason } from "../shared/types";

export const getSeasonName = (season: ISeason) => {
    return `Season ${season.editionNumber} (${dayjs(season.start).format(
        "DD MMM YY"
    )}
     - ${dayjs(season.end).format("DD MMM YY")})`;
};