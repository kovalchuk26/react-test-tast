import React, {Fragment, Component} from 'react';

import styles from '../../styles/chat/Message.css';
import Avatar from '../../assets/chat-avatar.svg';
import UnreadIcon from '../../assets/messageInfoIcons/read-icon.svg';
import ReadIcon from '../../assets/messageInfoIcons/unread-icon.svg';
import RepeatIcon from '../../assets/messageInfoIcons/repeat-icon.svg';
import DeleteIcon from '../../assets/messageInfoIcons/delete-icon.svg';

class Message extends Component {
    constructor(props) {
        super(props);

        this.getMessageStyle = this.getMessageStyle.bind(this);
        this.setMessageInfo = this.setMessageInfo.bind(this);
    }

    getMessageStyle(type, isOwn) {
        switch (type) {
            case 'default':
                return isOwn ? styles.ownMessage : styles.message;
            case 'top':
                return isOwn ? styles.ownMessageTop : styles.messageTop;
            case 'middle':
                return isOwn ? styles.ownMessageMiddle : styles.messageMiddle;
            case 'bottom':
                return isOwn ? styles.ownMessageBottom : styles.messageBottom;
            default:
                return isOwn ? styles.ownMessage : styles.message;
        }
    }

    setMessageInfo(message, isCurrentDay) {
        return (
            <Fragment>
                {message.info.isLoading && isCurrentDay ?
                    (<div className={styles.ownMessageInfo}>
                        <div className={styles.loadingStatus}>Отправляется…</div>
                    </div>) : null
                }

                {message.info.failedLoading && isCurrentDay ?
                    (<div className={styles.ownMessageInfo}>
                        <RepeatIcon className={styles.ownInfoIcon}/>
                        <DeleteIcon className={styles.ownInfoIcon}/>
                        <div className={styles.errorStatus}>Не отправлено</div>
                    </div>) : null
                }

                {(!message.info.isLoading && !message.info.failedLoading) && isCurrentDay ?
                    (<div className={styles.ownMessageReadStatus}>
                        {message.info.read ?
                            <ReadIcon className={styles.ownInfoIcon}/> :
                            <UnreadIcon className={styles.ownInfoIcon}/>
                        }
                        <div className={styles.ownMessageTime}>
                            {`${message.date.getHours()} : ${message.date.getMinutes()}`}
                        </div>
                    </div>) : null
                }
            </Fragment>
        )
    }

    render() {
        const {
            message,
            type,
            isCurrentDay,
            withTime,
            withAvatar
        } = this.props;

        return (
            <Fragment>

                {withAvatar ?
                    !message.avatarUrl ?
                        <Avatar className={styles.avatar}/> :
                        <img src={message.avatarUrl} alt=""/> :
                    null
                }

                {/*Check message info*/}
                {message.ownMessage ? this.setMessageInfo(message, isCurrentDay) : null}

                <div className={this.getMessageStyle(type, message.ownMessage)}>{message.text}</div>

                {withTime ?
                    <div className={styles.messageTime}>
                        {`${message.date.getHours()} : ${message.date.getMinutes()}`}
                    </div> :
                    null
                }


            </Fragment>)
    }
}

Message.defaultProps = {
    isCurrentDay: false,
    withTime: false,
    withAvatar: false
};

export default Message;