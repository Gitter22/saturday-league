export interface IPosition {
    id: string
    top: number
    left: number
    role: 'GK' | 'DEF' | 'MID' | "FWD"
}

export interface IFormation {
    id: string
    players: number
    positions: IPosition[]
}

export const positions: Record<IPosition['id'], IPosition> = {
    GK: {
        id: "GK",
        top: 5,
        left: 50,
        role: 'GK'
    },
    RB: {
        id: "RB",
        top: 15,
        left: 20,
        role: 'DEF'
    },
    RCB: {
        id: "RCB",
        top: 15,
        left: 30,
        role: 'DEF'
    },
    CB: {
        id: "CB",
        top: 15,
        left: 50,
        role: 'DEF'
    },
    LCB: {
        id: "LCB",
        top: 15,
        left: 70,
        role: 'DEF'
    },
    LB: {
        id: "LB",
        top: 15,
        left: 80,
        role: 'DEF'
    },
    RM: {
        id: "RM",
        top: 30,
        left: 20,
        role: 'MID'
    },
    RCM: {
        id: "RCM",
        top: 30,
        left: 30,
        role: 'MID'
    },
    CM: {
        id: "CM",
        top: 30,
        left: 50,
        role: 'MID'
    },
    LCM: {
        id: "LCM",
        top: 30,
        left: 70,
        role: 'MID'
    },
    LM: {
        id: "LM",
        top: 30,
        left: 80,
        role: 'MID'
    },
    RF: {
        id: "RF",
        top: 45,
        left: 20,
        role: 'FWD'
    },
    CF: {
        id: "CF",
        top: 45,
        left: 50,
        role: 'FWD'
    },
    LF: {
        id: "LF",
        top: 45,
        left: 80,
        role: 'FWD'
    }
}

export const formations: Record<IFormation['id'], IFormation> = {
    '2-2-2': {
        id: '2-2-2',
        players: 7,
        positions: [
            positions.GK,
            positions.LCB,
            positions.RCB,
            positions.LCM,
            positions.RCM,
            positions.RF,
            positions.LF
        ]
    },
    '2-3-1': {
        id: '2-3-1',
        players: 7,
        positions: [
            positions.GK,

            positions.LCB,
            positions.RCB,

            positions.LM,
            positions.CM,
            positions.RM,

            positions.CF
        ]
    },
    '2-3-2': {
        id: '2-3-2',
        players: 8,
        positions: [
            positions.GK,

            positions.LCB,
            positions.RCB,

            positions.LM,
            positions.CM,
            positions.RM,

            positions.LF,
            positions.RF,
        ]
    },
    '2-2-1': {
        id: '2-2-1',
        players: 5,
        positions: [
            positions.GK,

            positions.LCB,
            positions.RCB,

            positions.LCM,
            positions.RCM,

            positions.CF
        ]
    }
}