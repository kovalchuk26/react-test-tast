import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../../styles/chat/Chat.css';

import stickybits from 'stickybits';

import ChatHeader from '../chat/ChatHeader';
import MessageRows from './MessageRows';
import Indicator from '../../assets/indicator.svg';
import ErrorIcon from '../../assets/error-icon.svg';


class Chat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user, messages, errors} = this.props;

        return (
            <div className={styles.container}>

                <ChatHeader user={user}/>

                <div className={styles.chatWrapper} id='example'>

                    <div className={styles.content}>
                        <div className={styles.chat}>

                            <MessageRows messages={messages}
                                         errors={errors}/>

                            <div className={styles.dateRow}>
                                <div className={styles.dateMessage}>Сегодня</div>
                            </div>

                            <div className={styles.infoRow}>
                                <div className={styles.infoBlock}>
                                    <Indicator/>
                                    <div className={styles.infoMessage}>{user.orders[0].text}</div>
                                    <div className={styles.messageTime}>
                                        {`${user.orders[0].dateAccepted.getHours()} : ${user.orders[0].dateAccepted.getMinutes()}`}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.infoRow}>
                                <div className={styles.errorBlock}>
                                    <ErrorIcon/>
                                    <div className={styles.infoMessage}>{errors[0].text}</div>
                                    <div className={styles.messageTime}>
                                        {`${errors[0].date.getHours()} : ${errors[0].date.getMinutes()}`}
                                    </div>
                                </div>
                            </div>

                            {/*EXTRA BLOCKS*/}

                            <div className={styles.infoRow}>
                                <div className={styles.errorBlock}>
                                    <ErrorIcon/>
                                    <div className={styles.infoMessage}>{errors[0].text}</div>
                                    <div className={styles.messageTime}>
                                        {`${errors[0].date.getHours()} : ${errors[0].date.getMinutes()}`}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.errorBlock}>
                                    <ErrorIcon/>
                                    <div className={styles.infoMessage}>{errors[0].text}</div>
                                    <div className={styles.messageTime}>
                                        {`${errors[0].date.getHours()} : ${errors[0].date.getMinutes()}`}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.errorBlock}>
                                    <ErrorIcon/>
                                    <div className={styles.infoMessage}>{errors[0].text}</div>
                                    <div className={styles.messageTime}>
                                        {`${errors[0].date.getHours()} : ${errors[0].date.getMinutes()}`}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.errorBlock}>
                                    <ErrorIcon/>
                                    <div className={styles.infoMessage}>{errors[0].text}</div>
                                    <div className={styles.messageTime}>
                                        {`${errors[0].date.getHours()} : ${errors[0].date.getMinutes()}`}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.errorBlock}>
                                    <ErrorIcon/>
                                    <div className={styles.infoMessage}>{errors[0].text}</div>
                                    <div className={styles.messageTime}>
                                        {`${errors[0].date.getHours()} : ${errors[0].date.getMinutes()}`}
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className={styles.inputBlock} id='inputBlock'>
                            <input type="text"
                                   placeholder='Сообщение'
                                   className={styles.input}/>
                            <div className={styles.button}>Отправить</div>
                        </div>

                    </div>

                    {/*fix padding-right with scroll in ff*/}
                    <div className={styles.contentPadding}></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({user, messages, errors}) => ({
    user,
    messages,
    errors
});

Chat.propTypes = {
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
    messages: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        date: PropTypes.object.isRequired,
        avatarUrl: PropTypes.string,
        ownMessage: PropTypes.bool.isRequired,
        info: PropTypes.shape({
            read: PropTypes.bool.isRequired,
            isLoading: PropTypes.bool.isRequired,
            failedLoading: PropTypes.bool.isRequired
        })
    })).isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        date: PropTypes.object.isRequired,
    }))
};

export default connect(mapStateToProps, null)(Chat);