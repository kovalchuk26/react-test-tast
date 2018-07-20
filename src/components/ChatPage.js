import React from 'react';

import Header from './Header';
import Content from './Content';

import styles from '../styles/ChatPage.css';

const ChatPage = () => {

    return (
       <div className={styles.page}>
           <Header />
           <Content />
       </div>
    )
};

export default ChatPage
