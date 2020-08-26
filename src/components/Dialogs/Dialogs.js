import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((elem) => (
        <DialogItem name={elem.name} id={elem.id} key={elem.id} />
    ));

    let messagesElements = state.messages.map((elem) => (
        <Message message={elem.message} key={elem.id} />
    ));

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageChange(body);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>{dialogsElements}</div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
