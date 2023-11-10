import React, {useEffect} from 'react';
import styles from './CountDownAndStart.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store/store";
import {backgroundAC, countdownAC, playAC, startAC, startTimerAC, textAC} from "../../state/reducers/bubble-reducer";
import {UseCountdownInterval} from "../../hooks/useCountdownInterval";

export const CountDownAndStart = () => {
    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()

    //Кастомный хук
    UseCountdownInterval(bubble.start, bubble.countdown, dispatch)


    const onClickStartHandler = () => {
        dispatch(startAC(true))
        dispatch(textAC(''))
    }

    return (
        <>
            <div className={styles.start}>
                <div>{bubble.text}</div>
                {bubble.start
                    ? <div>{bubble.countdown}</div>
                    : <button onClick={onClickStartHandler}>
                        {bubble.play}
                    </button>}
            </div>
        </>
    );
};

