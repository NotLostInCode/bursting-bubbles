import React from 'react';
import styles from './styles/App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store/store";
import {Bubble} from "./components/Panel/Game/Bubble/Bubble";
import {Timer} from "./components/Panel/Game/Timer/Timer";
import {CountdownAndStart} from "./components/Panel/Game/CountDownAndStart/CountdownAndStart";
import Panel from "./components/Panel/Panel";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Game} from "./components/Panel/Game/Game";
import {Profile} from "./components/Panel/Profile/Profile";
import {GameDescription} from "./components/Panel/GameDescription/GameDescription";
import {Settings} from "./components/Panel/Settings/Settings";


export const App = () => {


    return (
        <div className={styles.app}>

            <div className={styles.containerBubble}>
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/game-description'} element={<GameDescription/>}/>
                    <Route path={'/game'} element={<Game/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>

                <Panel/>

            </div>

        </div>
    );
}


// if ((count + 1) % 10 === 0)





