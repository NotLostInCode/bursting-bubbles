import React, {useEffect, useState} from 'react';
import styles from './Timer.module.css'



export type PropsType = {
    startTimer: boolean
    life: number
    setLife: (life: number) => void
    count: number
}
export const Timer: React.FC<PropsType> = ({startTimer, life, setLife, count}) => {

    const [seconds, setSeconds] = useState(20)
    const [milliseconds, setMilliseconds] = useState(0);

    const lifes = () => {
        if (count < 10) {
            setLife(life - 1)

        }
    }

    const gettingSeconds = (sec: number) => sec < 10 ? `0${sec}` : sec

    useEffect(() => {

        let timer: any
        if (startTimer) {
            timer = setInterval(() => {
                if (seconds === 0 && milliseconds === 0) {
                    clearInterval(timer);
                    lifes()
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
        if (count >= 10){
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
