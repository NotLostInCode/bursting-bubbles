import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store/store";
import {
    countdownAC,
    countIncrementAC, decrementLifeAC, playAC, resetCountAC,
    startAC,
    startTimerAC,
    textAC
} from "../state/reducers/bubble-reducer";

export const useTimer = () => {
    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()

    const [seconds, setSeconds] = useState(15)
    const [milliseconds, setMilliseconds] = useState(0);


    const play = () => {
        setSeconds(15);
        setMilliseconds(0);
        dispatch(countdownAC(bubble.countdown))
        dispatch(startAC(false))
        dispatch(startTimerAC(false))

        //Имитация сохранения значения счетчика(на данный момент его обнуляю)
        dispatch(resetCountAC())
    }

    const repeat = () => {
        play()
        dispatch(textAC('You lose'))
        dispatch(playAC('Repeat'))
        dispatch(decrementLifeAC(bubble.life))
    }

    const nextRound = () => {
        play()
        dispatch(playAC('Start'))
        dispatch(textAC('Round', bubble.round, bubble.count))
    }

    const gettingSeconds = (sec: number) => sec < 10 ? `0${sec}` : sec

    useEffect(() => {

        let timer: any
        if (bubble.startTimer) {
            timer = setInterval(() => {
                if (seconds === 0 && milliseconds === 0) {
                    clearInterval(timer);
                    repeat()
                } else if (milliseconds === 0) {
                    setSeconds(seconds => seconds - 1)
                    setMilliseconds(9);
                } else if (milliseconds > 0) {
                    setMilliseconds(milliseconds => milliseconds - 1)
                }

            }, 100);

        }
        if (bubble.count >= 10) {
            clearInterval(timer);
            nextRound()
        }

        return () => {
            clearInterval(timer);
        };
    }, [seconds, milliseconds, bubble.startTimer, bubble.countdown]);

    return {
        seconds,
        milliseconds,
        gettingSeconds
    }
};
