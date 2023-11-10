import React, {useEffect} from 'react';
import {backgroundAC, countdownAC, playAC, startAC, startTimerAC} from "../state/reducers/bubble-reducer";

export const UseCountdownInterval = (start: boolean, countdown: number, dispatch: any) => {
        useEffect(() => {
            let countdownInterval: any;

            if (start) {
                countdownInterval = setInterval(() => {
                    dispatch(countdownAC(countdown))
                }, 1500)
            }
            if (countdown === 0) {
                clearInterval(countdownInterval)
                setTimeout(() => {
                    dispatch(startTimerAC(true))
                    dispatch(playAC(''))
                    dispatch(startAC(false))
                    dispatch(backgroundAC(false))

                }, 1500)
            }

            return () => {
                clearInterval(countdownInterval)
            }
        }, [start, countdown])

};
