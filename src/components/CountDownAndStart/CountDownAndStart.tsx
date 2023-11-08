import React, {useEffect} from 'react';
import styles from './CountDownAndStart.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store/store";
import {backgroundAC, countdownAC, playAC, startAC, startTimerAC, textAC} from "../../state/reducers/bubble-reducer";

export const CountDownAndStart = () => {
    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()


    useEffect(() => {
        let countdownInterval: any;

        if (bubble.start) {
            countdownInterval = setInterval(() => {
                dispatch(countdownAC(bubble.countdown))
            }, 1500)
        }
        if (bubble.countdown === 0) {
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
    }, [bubble.start, bubble.countdown]);

    const onClickStartHandler = () => {
        dispatch(startAC(true))
        dispatch(textAC(''))
    }

    const playGame = () => {
        if (bubble.start) {
            return <div>{bubble.countdown}</div>
        } else {
            return <button onClick={onClickStartHandler}>
                {bubble.play}
            </button>
        }

    }

    const testGame = () => {
     if(bubble.start) {
        return <div className={styles.start}>{bubble.countdown}</div>
     }
    }

    return (
        <>
            <div className={styles.start}>
                <div>{bubble.text}</div>
                {playGame()}
            </div>

        </>
    );
};

