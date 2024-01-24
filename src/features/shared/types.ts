export type Formation = string

export type Position = string
export type Awards = 'motm' | 'goldenBoot' | 'goldenGlove'

export interface IClub {
    id: string
    name: string,
    shortName: string,
    logo: {
        small: string | undefined
        large: string | undefined
    },
    colors?: {
        primary?: string,
        secondary?: string
    }
}

export interface IVenue {
    id: string
    name: string
    location: string | null
    createdAt: string | null
    updatedAt: string | null
}

export interface ITournament {
    id: string,
    type: 'league' | 'cup'
    name: string,
    logo?: string | undefined
}

export interface ISeason {
    id: string
    tournament: ITournament
    start: string
    end: string
    editionNumber: number
}

export interface IUser {
    id: string
    username: string
    kitNumber: number
    favClub: IClub
    displayName: string
    captaincyTeamName: string
    createdAt: string | null
    updatedAt: string | null
    preferredPositions: Position[]
}

export interface ISeasonPlayer extends Omit<IUser, 'username' | 'id'> {
    id: string
    seasonId: ISeason['id']
    tournamentId: ITournament['id']
    userId: IUser['id']
}


export interface IMatchPlayer extends ISeasonPlayer {
    playstatus: 'played' | 'noshow'
    position: Position | null
    ratings: number | null
}


export interface IMatchTeam {
    teamId: ISeasonPlayer['id'], //same as captain's ISeasonTeam id
    name: ISeasonPlayer['captaincyTeamName'], //same as captaincyTeamName
    captainId: ISeasonPlayer['userId'] //same as captain's userId
    teamLogo: string | undefined
    formation: Formation | null
    lineup: IMatchPlayer[] | null
}

export interface IMatchResult {
    team1Score: number,
    team2Score: number,
}

export interface IMatchAward extends Record<Awards, ISeasonPlayer['id'][]> {
}

export type MatchStatus = 'Pending' | 'Completed' | 'Cancelled'
export interface IMatch {
    id: string
    season: ISeason
    round: number
    tournament: ITournament
    startTime: string
    endTime: string
    venue: IVenue
    team1: IMatchTeam
    team2: IMatchTeam
    status: MatchStatus
    result: IMatchResult | null
    awards?: IMatchAward | null
}