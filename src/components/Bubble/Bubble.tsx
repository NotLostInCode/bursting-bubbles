import React, {useState} from 'react';
import styles from './Bubble.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store/store";

type PropsType = {
    gettingCounter: () => void
}

export const Bubble: React.FC<PropsType> = ({gettingCounter}) => {

    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()

    const getRandomPosition = (maxWidth: number, maxHeight: number) => {
        const x = Math.random() * (maxWidth - 50)
        const y = Math.random() * (maxHeight - 50)
        return {x, y}
    }

    const [position, setPosition] = useState(getRandomPosition(950, 700))

    const onClickRandomBubbleHandler = () => {
        setPosition(getRandomPosition(950, 700))
        gettingCounter()
    }
    const {x, y} = position;


    return (
        <div style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
        }} onClick={onClickRandomBubbleHandler} className={styles.bubble}>
        </div>
    )
}
