import React, {useEffect} from 'react';
import styles from './styles/App.module.css'
import Panel from "./components/Panel/Panel";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {Game} from "./components/Panel/Game/Game";
import {Profile} from "./components/Panel/Profile/Profile";
import {GameDescription} from "./components/Panel/GameDescription/GameDescription";
import {Settings} from "./components/Panel/Settings/Settings";
import {ProfileSetting} from "./components/Panel/Profile/ProfileSetting/ProfileSetting";
import {Statistics} from "./components/Panel/StatisticsProfile/Statistics";


export const App = () => {

    // Временное решение, для отрисовки страницы при первом рендеринге
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/profile');
    }, []);

    return (
        <div className={styles.app}>

            <div className={styles.containerBubble}>


                    <Routes>
                        <Route path={'/profile'} element={ <Profile />}/>
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





