export type CountIncrementActionType = ReturnType<typeof countIncrementAC>
export type PlayActionType = ReturnType<typeof playAC>
export type DecrementLifeActionType = ReturnType<typeof decrementLifeAC>
export type RandomBubblePositionActionType = ReturnType<typeof randomBubblePositionAC>
export type StartTimerActionType = ReturnType<typeof startTimerAC>
export type CountdownActionType = ReturnType<typeof countdownAC>
export type StartActionType = ReturnType<typeof startAC>
export type TextActionType = ReturnType<typeof textAC>
export type ResetCountActionType = ReturnType<typeof resetCountAC>


type ActionType = CountIncrementActionType | PlayActionType | DecrementLifeActionType  | RandomBubblePositionActionType | StartTimerActionType | CountdownActionType | StartActionType | TextActionType | ResetCountActionType

const initialState = {
    count: 0,
    play: 'Start',
    life: 5,
    horizontally: 0,
    vertically: 0,
    countdown: 3,
    startTimer: false,
    start: false,
    background: true,
    text: '',
    round: 1,
}

export const bubbleReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case 'RANDOM_BUBBLE_POSITION': {
            const horizontally = Math.random() * (action.maxWidth- 50)
            const vertically = Math.random() * (action.maxHeight - 50)
            return {...state, horizontally, vertically}
        }
        case 'START_TIMER': {
            return {...state, startTimer: action.timer}
        }

        case 'START': {
            return {...state, start: action.start}
        }

        case 'COUNTDOWN': {
            return {...state, countdown: action.countdown === 0 ? 3 : action.countdown - 1}
        }

        case 'COUNT_INCREMENT': {
            return {...state, count: action.count + 1}
        }
        case 'RESET_COUNT': {
            return {...state, count: 0}
        }
        case 'PLAY': {
            return {...state, play: action.play}
        }

        case 'DECREMENT_LIFE': {
            return {...state, life: action.life - 1}
        }

        case 'TEXT': {
            // @ts-ignore
            return {...state, text: action.count >= 10 ? `${action.text} ${action.round + 1 }`: action.text}
        }

        default:
            return state
    }
}

export const randomBubblePositionAC = (maxWidth: number, maxHeight: number) => {
    return {type: 'RANDOM_BUBBLE_POSITION', maxWidth, maxHeight } as const
}

export const textAC = (text: string, round?: number, count?: number) => {
    return {type: 'TEXT', text, round, count} as const
}

export const startTimerAC = (timer: boolean) => {
    return {type: 'START_TIMER', timer} as const
}
export const countdownAC = (countdown: number) => {
    return {type: 'COUNTDOWN', countdown} as const
}
export const startAC = (start: boolean) => {
    return {type: 'START', start} as const
}

export const resetCountAC = () => {
    return {type: 'RESET_COUNT'} as const
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

