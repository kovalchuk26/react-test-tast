import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from '../../styles/chat/ChatHeader.css';
import Indicator from '../../assets/indicator.svg';
import Star from '../../assets/favorite-star.svg';

const ChatHeader = ({user}) => {

    const usersStatus = user.isOnline ?
        (<Fragment>
            <Indicator className={styles.indicator}/>
            <div className={styles.status}>В сети</div>
        </Fragment>) :
        (<Fragment>
            <Indicator className={styles.indicatorOffline}/>
            <div className={styles.status}>Не в сети</div>
        </Fragment>);


    return (
        <div className={styles.header}>
            <div className={styles.user}>
                <div className={styles.userName}>{user.name}</div>
                <div className={styles.userStatus}>
                    {usersStatus}
                </div>
            </div>

            <div className={styles.profile}>
                <Link className={styles.profileLink} to='/'>Профиль ситтера</Link>
                <Star/>
            </div>
        </div>
    )
};

ChatHeader.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        orders: PropTypes.arrayOf(PropTypes.shape({
            dateAccepted: PropTypes.object.isRequired,
            text: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        }))
    }).isRequired,
};

export default ChatHeader;