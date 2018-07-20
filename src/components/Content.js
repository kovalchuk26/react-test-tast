import React from 'react';
import Sidebar from './Sidebar';
import Chat from './chat/Chat';
import styles from '../styles/Content.css'

const Content = () => {

    return (
        <div className={styles.content}>
            <Sidebar/>
            <Chat />
        </div>
    )
};

export default Content;