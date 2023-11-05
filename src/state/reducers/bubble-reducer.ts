

export type countIncrementActionType = ReturnType<typeof countIncrementAC>
export type playActionType = ReturnType<typeof playAC>


type ActionType = countIncrementActionType | playActionType

const initialState = {
    count: 0,
    play: 'Start',
}

export const bubbleReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'COUNT_INCREMENT': {
            return {...state, count: action.count + 1}
        }
        case 'PLAY': {
            return {...state, play: action.play}
        }

        default:
            return state
    }
}

export const countIncrementAC = (count: number) => {
    return {type: 'COUNT_INCREMENT', count} as const
}
export const playAC = (play: string) => {
    return {type: 'PLAY', play} as const
}

