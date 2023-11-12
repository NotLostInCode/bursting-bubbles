import React from 'react';
import styles from './Panel.module.css'
import profile from "../../assets/icons/profile.svg";
import descriptionGame from "../../assets/icons/list.svg";
import game from "../../assets/icons/game.svg";
import settings from "../../assets/icons/settings.svg";
import {NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";

export const Panel = () => {
    return (

            <div className={styles.panel}>
                <Routes>
                    <Route path={'/profile'} element={<Profile />}/>
                </Routes>
                <div className={styles.settings}>
                    <img src={descriptionGame} alt=""/>
                </div>
                <div className={styles.game}>
                    <img src={game} alt=""/>
                </div>
                <div className={styles.settings}>
                    <img src={settings} alt=""/>
                </div>

            </div>

    );
};

export default Panel;