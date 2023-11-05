import React, {useEffect, useState} from 'react';
import styles from './styles/App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store/store";
import {countIncrementAC, playAC} from "./state/reducers/bubble-reducer";
import {Bubble} from "./components/Bubble/Bubble";
import {Timer} from "./components/Timer/Timer";


export const App = () => {
    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)
    const dispatch = useDispatch()


    const [start, setStart] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [background, setBackground] = useState(true)
    const [startTimer, setStartTimer] = useState(false)

    const [life, setLife] = useState(5)



    const onClickStartHandler = () => {
        setStart(true)
    }

    //Из компоненты bubble вызывается функция и диспатчит count
    const gettingCounter = () => {
        dispatch(countIncrementAC(bubble.count))
    }

    useEffect(() => {
        let countdownInterval: any;

        if (start) {
            countdownInterval = setInterval(() => {
                setCountdown(countdown => countdown - 1)
            }, 1500)
        }
        if (countdown === 0) {
            clearInterval(countdownInterval)
            setTimeout(() => {
                setStartTimer(true)
                dispatch(playAC(''))
                setStart(false)
                setBackground(false)

            }, 1500)
        }

        return () => {
            clearInterval(countdownInterval)
        }
    }, [start, countdown]);



    return (
        <div className={styles.app}>

            <div className={styles.containerBubble}>

                <div className={styles.menuBubble}>
                    <div className={styles.lifes}>lifes {life}</div>
                    <div className={styles.timer}>
                        <Timer startTimer={startTimer}
                               life={life}
                               setLife={setLife}
                               count={bubble.count}/>
                    </div>
                    <div className={styles.count}>Count {bubble.count}</div>
                </div>

                <div className={styles.burstingBubbles}>
                    <div className={background ? styles.playGame : ''}>
                        <button onClick={onClickStartHandler} className={styles.start}>
                            {start ? countdown : bubble.play}
                        </button>
                    </div>
                    <Bubble gettingCounter={gettingCounter} />
                </div>
            </div>

        </div>
    );
}








