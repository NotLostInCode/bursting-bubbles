import React from 'react';
import styles from './CountdownAndStart.module.css'
import {useCountdownAndStart} from "../../../../hooks/useCountdownAndStart";


export const CountdownAndStart = () => {
    const {
        bubbleText,
        bubbleStart,
        bubbleCountdown,
        bubblePlay,
        onClickStartHandler,
        bubbleStartTimer
    } = useCountdownAndStart()

    return (
        <>
            <div className={styles.start}>
                <div className={styles.bubbleText}>{bubbleText}</div>
                {bubbleStart
                    ? (<div>{bubbleCountdown}</div>)
                    : (bubbleStartTimer
                        ? null
                        : <button className={styles.btnPlay} onClick={onClickStartHandler}>
                            {bubblePlay}
                        </button>)}
            </div>
        </>
    );
};

