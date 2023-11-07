import React, {useEffect, useState} from 'react';
import styles from './Timer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store/store";
import {decrementLifeAC} from "../../state/reducers/bubble-reducer";


export type PropsType = {
    startTimer: boolean
}
export const Timer: React.FC<PropsType> = ({startTimer}) => {
    const [seconds, setSeconds] = useState(20)
    const [milliseconds, setMilliseconds] = useState(0);

    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()


    const decrementLife = () => {
        if (bubble.count < 10) {
            dispatch(decrementLifeAC(bubble.life))
        }
    }

    const gettingSeconds = (sec: number) => sec < 10 ? `0${sec}` : sec

    useEffect(() => {

        let timer: any
        if (startTimer) {
            timer = setInterval(() => {
                if (seconds === 0 && milliseconds === 0) {
                    clearInterval(timer);
                    decrementLife()
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
        }

        return () => {
            clearInterval(timer);
        };
    }, [seconds, milliseconds, startTimer]);

    return (
        <div>{gettingSeconds(seconds)}:{gettingSeconds(milliseconds)}</div>
    )
}
