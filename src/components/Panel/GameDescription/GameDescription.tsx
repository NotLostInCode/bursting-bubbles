import React from 'react';
import styles from './GameDescription.module.css'
import {NavLink} from "react-router-dom";

export const GameDescription = () => {
    return (
        <div className={styles.gameDescription}>
            <div className={styles.gameDescriptionHead}>Game description</div>
            <div className={styles.description}>
                <div className={styles.victory}>
                    <p>The essence of the game is quite simple:</p>
                    <p>Within <span className={styles.selectedText}>15 seconds</span> you will need to burst 10 bubbles to
                        advance to the next round. <span
                            className={styles.selectedText}>The first 3 rounds will be warm-up</span>, in subsequent rounds
                        the speed of bubbles appearing and disappearing will increase <span className={styles.selectedText}>(that is, after the 3rd round)</span>.
                    </p>
                </div>
                <div className={styles.losing}>
                    <p>If you fail to pop 10 bubbles within 15 seconds, you will lose 1 life and start over from the same
                        round. When the life counter reaches zero, your progress will be lost and the game will start from the
                        first round.</p>
                </div>
                <div className={styles.enjoyGame}>Enjoy the game and <span className={styles.goodLuck}> good luck!</span></div>
            </div>


        </div>
    );
};



