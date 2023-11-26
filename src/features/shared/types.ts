export type Formation = '2-2-2' | '0-3-2' | '1-2-3' | '1-3-2'

export type Position = 'GK' | 'LB' | 'RB' | 'CB' | 'LM' | 'RM' | 'CM' | 'LF' | 'RF' | 'CF'

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

export interface ISeasonTeam extends Omit<IUser, 'username'> {
    seasonId: ISeason['id']
    tournamentId: ITournament['id']
    userId: IUser['id']
}


export interface IMatchPlayer {
    seasonTeamId: ISeasonTeam['id'], //same as ISeasonTeam id
    displayName: ISeasonTeam['displayName'], //same ISeaonTeam name
    kitNumber: number
    favClub: IClub
    captaincyTeamName: string
    userId: string,
    playstatus: 'played' | 'noshow'
    position: Position | null
    ratings: number | null

}


export interface IMatchTeam {
    teamId: ISeasonTeam['id'], //same as captain's ISeasonTeam id
    name: ISeasonTeam['captaincyTeamName'], //same as captaincyTeamName
    captainId: ISeasonTeam['userId'] //same as captain's userId
    teamLogo: string | undefined
    formation: Formation | null
    lineup: IMatchPlayer[] | null
}

export interface IMatchResult {
    team1Score: number,
    team2Score: number,
}

export interface IMatchAward extends Record<Awards, ISeasonTeam['id'][]> {
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