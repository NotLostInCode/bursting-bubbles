import React from 'react';
import styles from './Bubble.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store/store";
import {countIncrementAC, playAC, randomBubblePositionAC} from "../../state/reducers/bubble-reducer";


export const Bubble = () => {

    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()

    const displayBubble = bubble.startTimer ? styles.showBubble : styles.hiddenBubble

    const onClickRandomBubbleHandler = () => {
        dispatch(countIncrementAC(bubble.count))
        dispatch(randomBubblePositionAC(950, 700))
    }

    return (
        <div style={{
            left: `${bubble.horizontally}px`,
            top: `${bubble.vertically}px`,
        }} onClick={onClickRandomBubbleHandler} className={displayBubble}>
        </div>
    )
}
