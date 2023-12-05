import React from 'react';
import styles from './Statistics.module.css'

export const Statistics = () => {
    return (
        <div className={styles.profileStatus}>
            <div className={styles.statisticsHead}>Statistics</div>

            <div className={styles.statistics}>
                <div className={`${styles.totalRound} ${styles.inOneLine}`}>
                    <p className={styles.statusName}>Completed rounds in a row</p>
                    <p className={styles.statisticsStatus}>999</p>
                </div>
                <div className={`${styles.bestTime} ${styles.inOneLine}`}>
                    <p className={styles.statusName}>Best time</p>
                    <p className={styles.statisticsStatus}>20 seconds</p>
                </div>
                <div className={`${styles.totalBubbles} ${styles.inOneLine}`}>
                    <p className={styles.statusName}>Total burst bubbles</p>
                    <p className={styles.statisticsStatus}>999</p>
                </div>
            </div>
        </div>
    );
};
