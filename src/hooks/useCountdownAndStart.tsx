import React, {useEffect} from 'react';
import {countdownAC, startAC, startTimerAC, textAC} from "../state/reducers/bubble-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store/store";

export const useCountdownAndStart = () => {
    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()


    useEffect(() => {
        let countdownInterval: any;

        if (bubble.start) {
            countdownInterval = setInterval(() => {
                dispatch(countdownAC(bubble.countdown))
            }, 1000)
        }
        if (bubble.countdown === 0) {
            clearInterval(countdownInterval)
            setTimeout(() => {
                dispatch(startTimerAC(true))
                dispatch(startAC(false))

            }, 1500)
        }

        return () => {
            clearInterval(countdownInterval)
        }
    }, [bubble.start, bubble.countdown])

    const onClickStartHandler = () => {
        dispatch(startAC(true))
        dispatch(textAC(''))
    }


    return {
        bubbleText: bubble.text,
        bubbleStart: bubble.start,
        bubbleCountdown: bubble.countdown,
        onClickStartHandler,
        bubblePlay: bubble.play,
        bubbleStartTimer: bubble.startTimer,

    };
};
