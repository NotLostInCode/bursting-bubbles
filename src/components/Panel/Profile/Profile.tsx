import React from 'react';
import styles from './Profile.module.css'
import avatar from '../../../assets/images/avatar.png'
import settingProfile from '../../../assets/icons/settingProfile.svg'
import {NavLink} from "react-router-dom";
import {Statistics} from "../StatisticsProfile/Statistics";

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileData}>

                <div className={styles.avatar}>
                    <img src={avatar} alt=""/>
                </div>

                <div className={styles.name}>
                    <p>Anonymous</p>
                </div>

                <div className={styles.settingProfile}>
                    <NavLink to={'/setting-profile'}>
                        <img src={settingProfile} alt=""/>
                    </NavLink>
                </div>
            </div>

            <Statistics/>

        </div>
    );
};
