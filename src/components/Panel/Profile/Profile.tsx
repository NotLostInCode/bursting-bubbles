import React from 'react';
import styles from './Profile.module.css'
import {NavLink} from "react-router-dom";
import profile from "../../../assets/icons/profile.svg";

export const Profile = () => {
    return (
       <div>
           <NavLink to={'/profile'} className={styles.profile}>
               <div>
                   <img src={profile} alt=""/>
               </div>
           </NavLink>
       </div>
    );
};
