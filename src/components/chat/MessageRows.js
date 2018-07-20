import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/chat/MessageRow.css';
import Avatar from '../../assets/chat-avatar.svg';

import Message from './Message';

class MessageRows extends Component {
    constructor(props) {
        super(props);

        const {messages} = this.props;

        this.state = {
            groupsOfMessages: this.groupedMessages(messages)
        };

        this.formCommonMessageRow = this.formCommonMessageRow.bind(this);
        this.formMessageGroupRow = this.formMessageGroupRow.bind(this);
    }

    groupedMessages(messages) {
        let groups = [];

        messages.forEach((message, index) => {
            const previousMessage = index === 0 ? message : messages[index - 1];
            const timeDifference = Date.parse(message.date) - Date.parse(previousMessage.date);

            if ((timeDifference > 60000 || timeDifference === 0) || previousMessage.ownMessage !== message.ownMessage) {
                groups.push([message])
            } else {
                groups[groups.length - 1].push(message);
            }
        });

        return groups;
    }

    formCommonMessageRow(messageGroup) {
        const message = messageGroup[0];

        return message.ownMessage ?
            this.formOwnMessageRow(message) :
            this.formMessageRow(message);
    }

    checkCurrentDay(message) {
        // mock current day
        // return message.date.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
        return true;
    }

    formMessageRow(message) {
        return (
            <div className={styles.messageRow} key={message.id}>
                <Message message={message}
                         type='default'
                         withTime
                         withAvatar/>
            </div>
        )
    }

    formOwnMessageRow(message) {
        const isCurrentDay = this.checkCurrentDay(message);

        return (<div className={styles.ownMessageRow} key={message.id}>
            <Message message={message}
                     type='default'
                     isCurrentDay={isCurrentDay}/>

        </div>)
    }

    formMessageGroupRow(messageGroup) {
        const message = messageGroup[0];

        return message.ownMessage ?
            this.formOwnGroupRow(messageGroup) :
            this.formGroupRow(messageGroup);
    }

    formOwnGroupRow(messageGroup) {
        return (
            <div className={styles.ownMessageRow} key={messageGroup[0].id}>
                <div className={styles.ownMessageGroup}>
                    {
                        messageGroup.map((message, index) => {
                            if (index === 0) {
                                return <Message message={message}
                                                type='top'
                                                key={message.id}/>
                            } else if (index === messageGroup.length - 1) {
                                return (
                                    <div className={styles.lastMessage} key={message.id}>
                                        <div className={styles.ownMessageTime}>
                                            {`${message.date.getHours()} : ${message.date.getMinutes()}`}
                                        </div>
                                        <Message message={message}
                                                 type='bottom'
                                                 key={message.id}/>
                                    </div>
                                )
                            } else {
                                return <Message message={message}
                                                type='middle'
                                                key={message.id}/>

                            }
                        })
                    }
                </div>
            </div>
        )
    }

    formGroupRow(messageGroup) {
        return (<div className={styles.groupMessageRow} key={messageGroup[0].id}>
            <Avatar className={styles.avatar}/>
            <div className={styles.messageGroup}>
                {
                    messageGroup.map((message, index) => {
                        if (index === 0) {
                            return <Message message={message}
                                            type='top'
                                            key={message.id}/>
                        } else if (index === messageGroup.length - 1) {
                            return (
                                <div className={styles.lastMessage} key={message.id}>
                                    <Message message={message}
                                             type='bottom'
                                             withTime/>
                                </div>
                            )
                        } else {
                            return <Message message={message}
                                            type='middle'
                                            key={message.id}/>
                        }
                    })
                }
            </div>
        </div>)
    }

    render() {
        const messageGroups = this.state.groupsOfMessages;

        return (
            <Fragment>
                {messageGroups.map(messageGroup => {
                    return messageGroup.length === 1 ?
                        this.formCommonMessageRow(messageGroup) :
                        this.formMessageGroupRow(messageGroup)

                })}
            </Fragment>
        )
    }
}

MessageRows.propTypes = {
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

export default MessageRows;

