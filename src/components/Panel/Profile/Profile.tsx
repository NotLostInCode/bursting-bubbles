import React from 'react';
import styles from './Profile.module.css'
import avatar from '../../../assets/images/avatar.png'

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
           </div>

           <div className={styles.profileStatus}>
               <div className={styles.statisticsHead}>Statistics</div>

              <div className={styles.statistics}>
                  <div className={`${styles.totalRound} ${styles.inOneLine}`}>
                      <p>Completed rounds in a row</p>
                      <p className={styles.statisticsStatus}>999</p>
                  </div>
                  <div className={`${styles.bestTime} ${styles.inOneLine}`}>
                      <p>Best time</p>
                      <p className={styles.statisticsStatus}>20 seconds</p>
                  </div>
                  <div className={`${styles.totalBubbles} ${styles.inOneLine}`}>
                      <p>Total burst bubbles</p>
                      <p className={styles.statisticsStatus}>999</p>
                  </div>
              </div>
           </div>

        {/*<div>*/}
        {/*    <button>Log out</button>*/}
        {/*</div>*/}
       </div>
    );
};
