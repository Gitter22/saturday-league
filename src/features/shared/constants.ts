import {
    Formation,
    IClub,
    IMatch,
    IMatchPlayer,
    IMatchResult,
    IMatchTeam,
    ISeason,
    ISeasonPlayer,
    ITournament,
    IUser,
    IVenue,
    Position,
    MatchStatus
} from "./types"

import dayjs from 'dayjs'

import arsenalsmall from '../../assets/teams/32/arsenal.png'
import chelseasmall from '../../assets/teams/32/chelsea.png'
import liverpoolsmall from '../../assets/teams/32/liverpool.png'
import mancitysmall from '../../assets/teams/32/mancity.png'
import manusmall from '../../assets/teams/32/manu.png'
import arsenallarge from '../../assets/teams/150/arsenal.png'
import chelsealarge from '../../assets/teams/150/chelsea.png'
import liverpoollarge from '../../assets/teams/150/liverpool.png'
import mancitylarge from '../../assets/teams/150/mancity.png'
import manularge from '../../assets/teams/150/manu.png'
import leagueLogo from "../../assets/leagues/premierleague.png"
import { formations, positions } from "../matches/formations"



const users: string[] = ['Aadil', 'Robin', 'Keval', 'Deepak', 'Pranav', 'Ishan', 'Kenil', 'Sarath', 'Harsh', 'Gunjan', 'Jyot']
const captaincyNames: string[] = ["United 7", "Gunners 7", "Red Army", "Red Devils", "Scousers", "Blue Army"]
export const getRandomNumberInRange = (start: number, end: number) => {
    return Math.floor(Math.random() * (end - start)) + start
}
export const getRandomDate = (range: 'past' | 'future') => {
    const randomdayOffset = getRandomNumberInRange(0, 30)
    if (range === 'past') {
        return dayjs().subtract(randomdayOffset, 'days').toISOString()
    } else {
        return dayjs().add(randomdayOffset, 'days').toISOString()
    }
}

export const getFormationList = (): Formation[] => {
    const formationsArray = Object.keys(formations)
    return formationsArray
}

export const getRandomFormation = (): Formation => {
    const formationsArray = Object.keys(formations)
    return formationsArray[getRandomNumberInRange(0, formationsArray.length)]
}

export const getPositionList = (): Position[] => {
    const positionsArray = Object.keys(positions)
    return positionsArray
}

export const getRandomPosition = (): Position => {
    const positions = getPositionList()
    return positions[getRandomNumberInRange(0, positions.length)]
}


export const getClubList = (): IClub[] => {


    const clubs: IClub[] = [
        {
            id: '1',
            name: 'Arsenal',
            shortName: 'Ars',
            logo: {
                small: arsenalsmall,
                large: arsenallarge
            },
            colors: {
                primary: '#EF0107',
                secondary: '#FFFFFF'
            }
        },
        {
            id: '2',
            name: 'Manchester United',
            shortName: 'Manu',
            logo: {
                small: manusmall,
                large: manularge
            },
            colors: {
                primary: '#DA291C',
                secondary: "#FBE122"
            }
        },
        {
            id: '3',
            name: 'Manchester City',
            shortName: 'ManCity',
            logo: {
                small: mancitysmall,
                large: mancitylarge
            },
            colors: {
                primary: '#6CADDF',
                secondary: '#FFFFFF'
            }
        },
        {
            id: '4',
            name: 'Liverpool',
            shortName: 'Liv',
            logo: {
                small: liverpoolsmall,
                large: liverpoollarge
            },
            colors: {
                primary: '#C8102E',
                secondary: '#00B2A9'
            },

        },
        {
            id: '5',
            name: 'Chelsea',
            shortName: 'Che',
            logo: {
                small: chelseasmall,
                large: chelsealarge
            },
            colors: {
                primary: '#034694'
            }
        },
    ]
    return clubs
}

export const getRandomClub = () => {
    const clubList = getClubList()
    return clubList[getRandomNumberInRange(0, clubList.length)]
}

export const getVenueList = () => {
    const venues: IVenue[] = [{
        id: '1',
        name: 'Gameplex Arena',
        location: 'https://www.google.com',
        createdAt: null,
        updatedAt: null
    }, {
        id: '2',
        name: 'Eclipse Bhayli',
        location: 'https://www.google.com',
        createdAt: null,
        updatedAt: null
    }]
    return venues
}
export const getRandomVenue = (): IVenue => {
    const venues = getVenueList()
    return venues[getRandomNumberInRange(0, venues.length)]
}

export const getRandomTournament = (): ITournament => {
    const names = ['Saturday League', 'MidWeek Football', 'Linde Group']
    return {
        id: getRandomNumberInRange(0, 125).toString(),
        name: names[getRandomNumberInRange(0, names.length)],
        type: Math.random() > 0.5 ? 'league' : 'cup',
        logo: leagueLogo
    }
}

export const getTournamentList = (length: number = 5) => {
    return new Array(length).fill(null).map(getRandomTournament)
}

export const getRandomSeason = (): ISeason => {
    return {
        id: getRandomNumberInRange(0, 125).toString(),
        tournament: getRandomTournament(),
        editionNumber: getRandomNumberInRange(1, 10),
        start: getRandomDate('past'),
        end: getRandomDate('future')
    }
}

export const getSeasonList = (length: number = 5): ISeason[] => {
    return new Array(length).fill(null).map(getRandomSeason)
}

export const getRandomUser = (): IUser => {
    const randomIndex = getRandomNumberInRange(0, users.length)
    return {
        id: getRandomNumberInRange(0, 500).toString(),
        username: users[randomIndex],
        kitNumber: getRandomNumberInRange(0, 11),
        favClub: getRandomClub(),
        displayName: users[randomIndex],
        captaincyTeamName: captaincyNames[getRandomNumberInRange(0, captaincyNames.length)],
        createdAt: null,
        updatedAt: null,
        preferredPositions: [getRandomPosition(), getRandomPosition(), getRandomPosition()]
    }
}
export const getUserList = (length: number = 5): IUser[] => {
    return new Array(length).fill(null).map(getRandomUser)
}

export const getRandomSeasonPlayer = (): ISeasonPlayer => {
    const { username, id: userId, ...restUser } = getRandomUser()
    return {

        id: getRandomNumberInRange(0, 500).toString(),
        tournamentId: getRandomNumberInRange(0, 125).toString(),
        seasonId: getRandomNumberInRange(0, 125).toString(),
        userId: userId,
        ...restUser,
    }
}

export const getSeasonPlayerList = (length: number = 5): ISeasonPlayer[] => {
    return new Array(length).fill(null).map(getRandomSeasonPlayer)
}

export const getRandomMatchPlayer = (): IMatchPlayer => {
    const randomSeasonPlayer = getRandomSeasonPlayer()
    return {
        ...randomSeasonPlayer,
        playstatus: Math.random() < 0.2 ? 'noshow' : 'played',
        position: getRandomPosition(),
        ratings: getRandomNumberInRange(0, 10),
    }
}

export const getRandomMatchTeam = (): IMatchTeam => {
    const captainPlayer = getRandomMatchPlayer()
    return {
        teamId: captainPlayer.id, //same as captain's ISeasonTeam id
        name: captainPlayer.captaincyTeamName, //same as captaincyTeamName
        captainId: captainPlayer.userId, //same as captain's userId
        teamLogo: captainPlayer.favClub.logo.small ?? undefined,
        formation: getRandomFormation(),
        lineup: new Array(6).fill(null).map(getRandomMatchPlayer).concat([captainPlayer])
    }
}

const getRandomMatchStatus = (): MatchStatus => {
    const status: MatchStatus[] = ['Pending', 'Completed', 'Cancelled']
    return status[getRandomNumberInRange(0, status.length - 1)]
}

const getMatchResult = (status: MatchStatus): IMatchResult | null => {

    if (status === 'Completed') {
        const team1Score = getRandomNumberInRange(0, 9)
        const team2Score = getRandomNumberInRange(0, 9)
        return {
            team1Score: team1Score,
            team2Score: team2Score,
        }
    } else {
        return null
    }
}

export const getRandomMatch = (): IMatch => {
    const season = getRandomSeason()
    const venue = getRandomVenue()
    const team1 = getRandomMatchTeam()
    const team2 = getRandomMatchTeam()
    const status = getRandomMatchStatus()
    const startTime = getRandomDate('past')
    const endTime = dayjs(startTime).add(1, 'hours').toISOString()

    return {
        id: getRandomNumberInRange(1000, 2000).toString(),
        season: season,
        tournament: season.tournament,
        round: getRandomNumberInRange(1, 22),
        startTime: startTime,
        endTime: endTime,
        venue: venue,
        team1: team1,
        team2: team2,
        status: getRandomMatchStatus(),
        result: getMatchResult(status),
        awards: null
    }
}

export const getRandomMatchList = (length: number = 5): IMatch[] => {
    return new Array(length).fill(null).map(getRandomMatch)
}


