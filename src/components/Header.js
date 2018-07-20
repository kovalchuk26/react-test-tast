import React from 'react';
import styles from '../styles/Header.css';
import Logo from '../assets/logotype.svg';
import Avatar from '../assets/avatar.svg';
import Triangle from '../assets/triangle-avatar.svg';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Logo />
        </div>

        <div className={styles.links}>
            <div className={styles.link}>Сообщения</div>
            <div className={styles.link}>Найти ситтера</div>
            <div className={styles.link}>Все ситтеры</div>
        </div>

        <div className={styles.avatarBLock}>
            <Avatar className={styles.avatar}/>
            <Triangle />
        </div>
    </div>
);

export default Header;