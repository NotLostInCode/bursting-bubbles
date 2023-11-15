import React, {useEffect, useState} from 'react';
import styles from './Bubble.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../state/store/store";
import {countIncrementAC, playAC, randomBubblePositionAC} from "../../../../state/reducers/bubble-reducer";
import bubbleSound from '../../../../assets/audio/popped.mp3'

export const Bubble = () => {
    const [popped, setPopped] = useState(false);

    const playBubbleSound = () => {
        const audio = new Audio(bubbleSound)
        audio.play()
    }

    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()


    const displayBubble = bubble.startTimer ? styles.showBubble : styles.hiddenBubble


    const onClickRandomBubbleHandler = () => {
        setPopped(true);
        playBubbleSound()
    }

    useEffect(() => {
        if (popped) {
            const timeoutId = setTimeout(() => {
                dispatch(countIncrementAC(bubble.count))
                dispatch(randomBubblePositionAC(950, 700))
                setPopped(false);
            }, 500);

            return () => clearTimeout(timeoutId);
        }
    }, [popped]);

    return (
        <div  onClick={onClickRandomBubbleHandler} className={`${styles.poppedBubble} ${popped ? styles.popped : ''}`}>
            <div style={{
                left: `${bubble.horizontally}px`,
                top: `${bubble.vertically}px`,
            }} className={displayBubble}></div>
        </div>
    )
}
