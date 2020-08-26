import React from 'react';

import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageChange={onNewMessageChange}
            dialogsPage={state.dialogsPage}
        />
    );
};

export default DialogsContainer;
