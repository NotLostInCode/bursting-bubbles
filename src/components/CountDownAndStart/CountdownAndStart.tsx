import React from 'react';
import styles from './CountdownAndStart.module.css'
import {useCountdownAndStart} from "../../hooks/useCountdownAndStart";


export const CountdownAndStart = () => {
    const {
        bubbleText,
        bubbleStart,
        bubbleCountdown,
        bubblePlay,
        onClickStartHandler
    } = useCountdownAndStart()

    return (
        <>
            <div className={styles.start}>
                <div>{bubbleText}</div>
                {bubbleStart
                    ? <div>{bubbleCountdown}</div>
                    : <button onClick={onClickStartHandler}>
                        {bubblePlay}
                    </button>}
            </div>
        </>
    );
};

