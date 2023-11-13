import React from 'react';
import styles from './Game.module.css'
import {NavLink} from "react-router-dom";
import {CountdownAndStart} from "./CountDownAndStart/CountdownAndStart";
import {Bubble} from "./Bubble/Bubble";
import {Timer} from "./Timer/Timer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store/store";

export const Game = () => {

    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)

    return (
        <>
            <div className={styles.menuBubble}>
                <div className={styles.lifes}>{bubble.life}</div>
                <Timer/>
                <div className={styles.count}>{bubble.count}</div>
            </div>

            <div className={styles.burstingBubbles}>
                <div>
                    <CountdownAndStart/>
                </div>
                <Bubble/>
            </div>
        </>
    );
};
