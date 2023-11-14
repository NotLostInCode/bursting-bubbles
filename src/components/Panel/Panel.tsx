import React from 'react';
import styles from './Panel.module.css'
import profile from "../../assets/icons/profile.svg";
import descriptionGame from "../../assets/icons/list.svg";
import game from "../../assets/icons/game.svg";
import settings from "../../assets/icons/settings.svg";
import {NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {GameDescription} from "./GameDescription/GameDescription";
import {Game} from "./Game/Game";
import {Settings} from "./Settings/Settings";

export const Panel = () => {
    return (

        <div className={styles.panel}>
            <NavLink to={'/profile'} className={styles.panelLink}>
                <img className={styles.panelImg}src={profile} alt=""/>
            </NavLink>
            <NavLink to={'/game-description'} className={styles.panelLink}>
                <img className={styles.panelImg} src={descriptionGame} alt=""/>
            </NavLink>
            <NavLink to={'/game'} className={styles.panelLink}>
                <img className={styles.panelImg} src={game} alt=""/>
            </NavLink>

            {/*Временная заглушка, т.к страница ещё не реализована*/}
            <NavLink to={'/settings'} onClick={(e) => e.preventDefault()} className={styles.panelLink}>
                <img className={styles.panelImg} src={settings} alt=""/>
            </NavLink>
        </div>
    );
};

export default Panel;