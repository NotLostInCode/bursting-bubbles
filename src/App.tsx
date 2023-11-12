import React from 'react';
import styles from './styles/App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store/store";
import {Bubble} from "./components/Bubble/Bubble";
import {Timer} from "./components/Timer/Timer";
import {CountdownAndStart} from "./components/CountDownAndStart/CountdownAndStart";
import Panel from "./components/Panel/Panel";
import {BrowserRouter} from "react-router-dom";


export const App = () => {
    let bubble = useSelector<AppRootStateType, any>(state => state.bubble)


    return (
        <div className={styles.app}>

            <div className={styles.containerBubble}>

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

               <BrowserRouter>
                   <Panel/>
               </BrowserRouter>
            </div>

        </div>
    );
}


// if ((count + 1) % 10 === 0)





