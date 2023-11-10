import React, {useEffect, useState} from 'react';
import styles from './Timer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store/store";
import {
    backgroundAC,
    countdownAC, countIncrementAC,
    decrementLifeAC,
    playAC,
    roundAC,
    startAC,
    startTimerAC,
    textAC
} from "../../state/reducers/bubble-reducer";



export const Timer = () => {
    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()

    const [seconds, setSeconds] = useState(5)
    const [milliseconds, setMilliseconds] = useState(0);


    const play = () => {
        setSeconds(15);
        setMilliseconds(0);
        dispatch(countdownAC(bubble.countdown))
        dispatch(startAC(false))
        dispatch(startTimerAC(false))
        dispatch(backgroundAC(true))

        //Имитация сохранения значения счетчика(на данный момент его обнуляю)
        dispatch(countIncrementAC(0))
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
        dispatch(roundAC(bubble.round))
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
                    if (seconds > 0) {
                        setSeconds(seconds => seconds - 1)
                    }
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

    return (
        <div>{gettingSeconds(seconds)}:{gettingSeconds(milliseconds)}</div>
    )
}
