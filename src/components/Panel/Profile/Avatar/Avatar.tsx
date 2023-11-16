import React, {ChangeEvent, useState} from 'react';
import styles from './Avatar.module.css'
import avatar from "../../../../assets/images/avatar.png";

export const Avatar = () => {
    const [avatarUpdate, setAvatarUpdate] = useState(avatar)

    const onChangeAvatarUpdate = (e: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div className={styles.avatar}>
            <input type="file" style={{display: 'none'}} id={styles.inputFile} onChange={onChangeAvatarUpdate}/>
            <div><label htmlFor={styles.inputFile}></label></div>
            <img src={avatarUpdate} alt=""/>
        </div>
    );
};

