import React, {ChangeEvent, useState} from 'react';
import styles from './Avatar.module.css'
import avatar from "../../../../assets/images/avatar.png";
import addAvatar from '../../../../assets/icons/addAvatar.svg'

export const Avatar = () => {
    const [avatarUpdate, setAvatarUpdate] = useState(avatar)

    const onChangeAvatarUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.files && e.currentTarget.files[0]) {
            setAvatarUpdate(URL.createObjectURL(e.currentTarget.files[0]))
        }
    }

    return (
        <div className={styles.profileAvatar}>

            <div className={styles.avatarUpdate}>
                <img className={styles.avatar} src={avatarUpdate} alt=""/>
                <input type="file" style={{display: 'none'}} id={styles.inputFile} onChange={onChangeAvatarUpdate}/>
                <label htmlFor={styles.inputFile}>
                    <img src={addAvatar} alt=""/>
                </label>
            </div>



        </div>
    );
};

