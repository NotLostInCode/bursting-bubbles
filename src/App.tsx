import React from 'react';
import styles from './styles/App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store/store";
import {Bubble} from "./components/Bubble/Bubble";
import {Timer} from "./components/Timer/Timer";
import {CountDownAndStart} from "./components/CountDownAndStart/CountDownAndStart";


export const App = () => {
    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)


    return (
        <div className={styles.app}>

            <div className={styles.containerBubble}>

                <div className={styles.menuBubble}>
                    <div className={styles.lifes}>lifes {bubble.life}</div>
                    <div className={styles.timer}>
                        <Timer/>
                    </div>
                    <div className={styles.count}>Count {bubble.count}</div>
                </div>

                <div className={styles.burstingBubbles}>
                    <div className={bubble.background ? styles.playGame : ''}>
                       <CountDownAndStart />
                    </div>
                    <Bubble/>
                </div>
            </div>

        </div>
    );
}


// if ((count + 1) % 10 === 0)





