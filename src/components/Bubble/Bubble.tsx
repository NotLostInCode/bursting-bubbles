import React, {useState} from 'react';
import styles from './Bubble.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store/store";
import {countIncrementAC, randomBubblePositionAC} from "../../state/reducers/bubble-reducer";

type PropsType = {

}

export const Bubble: React.FC<PropsType> = () => {

    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()


    const onClickRandomBubbleHandler = () => {
        dispatch(countIncrementAC(bubble.count))
        dispatch(randomBubblePositionAC(950, 700))
    }

    return (
        <div style={{
            position: "absolute",
            left: `${bubble.horizontally}px`,
            top: `${bubble.vertically}px`,
        }} onClick={onClickRandomBubbleHandler} className={styles.bubble}>
        </div>
    )
}
