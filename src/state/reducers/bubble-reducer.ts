export type CountIncrementActionType = ReturnType<typeof countIncrementAC>
export type PlayActionType = ReturnType<typeof playAC>
export type DecrementLifeActionType = ReturnType<typeof decrementLifeAC>
export type NextRoundActionType = ReturnType<typeof nextRoundAC>
export type RandomBubblePositionActionType = ReturnType<typeof randomBubblePositionAC>


type ActionType = CountIncrementActionType | PlayActionType | DecrementLifeActionType | NextRoundActionType | RandomBubblePositionActionType

const initialState = {
    count: 0,
    play: 'Start',
    life: 5,
    horizontally: 0,
    vertically: 0,
}

export const bubbleReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case 'RANDOM_BUBBLE_POSITION': {
            const horizontally = Math.random() * (action.maxWidth- 50)
            const vertically = Math.random() * (action.maxHeight - 50)
            return {...state, horizontally, vertically}
        }

        case 'COUNT_INCREMENT': {
            return {...state, count: action.count + 1}
        }
        case 'PLAY': {
            return {...state, play: action.play}
        }

        case 'DECREMENT_LIFE': {
            return {...state, life: action.life - 1}
        }

        case 'NEXT_ROUND': {
            return
        }

        default:
            return state
    }
}

export const randomBubblePositionAC = (maxWidth: number, maxHeight: number) => {
    return {type: 'RANDOM_BUBBLE_POSITION', maxWidth, maxHeight } as const
}

export const countIncrementAC = (count: number) => {
    return {type: 'COUNT_INCREMENT', count} as const
}
export const playAC = (play: string) => {
    return {type: 'PLAY', play} as const
}
export const decrementLifeAC = (life: number) => {
    return {type: 'DECREMENT_LIFE', life} as const
}
export const nextRoundAC = (round: number) => {
    return {type: 'NEXT_ROUND', round} as const
}
