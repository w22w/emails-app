import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMessagesAllByUserId } from 'store/messages/selectors';
import { UserMessage } from '../Message';
import { getUsersAllByIdUserName } from 'store/users/selectors';
import css from './Modal.module.scss'
import { Scrollbar } from '../index';
import { markAllRead } from 'store/users/actions';
import { markMessagesReadForUser } from 'store/messages/actions';
import uuid from 'react-uuid'
import EventHub from 'service/EventEmmitter'
import appConstants from 'common/appConstants';

const UserMessages = (props) => {
    const { id, onClose } = props
    const dispatch = useDispatch()
    const userName = useSelector(state => getUsersAllByIdUserName(state, id), shallowEqual)
    const messages = useSelector(state => getMessagesAllByUserId(state, id), shallowEqual)
    const [ scrollId ] = useState(uuid())
    
    useEffect(() => {
        if (id) {
            dispatch(markAllRead({ userId: id }))
        }
        return () => {
            if (id) {
                dispatch(markMessagesReadForUser({ userId: id }))
            }
        }
    }, [ id, dispatch ])
    
    useEffect(() => {
        setTimeout(() => {
            EventHub.emit(appConstants.events.scroll, { scrollId, direction: appConstants.scroll.direction.down })
        }, 0)
    
    }, [ scrollId ])
    
    
    return (
        <div>
            <div className={css.Title}>
                Messages for {userName}
                <div className={css.CloseButton} onClick={onClose}>X</div>
            </div>
            <div className={css.Content}>
                <Scrollbar id={scrollId}>
                    {
                        messages.map((message => <UserMessage id={message.messageId} key={message.messageId}/>))
                    }
                </Scrollbar>
            </div>
        </div>
    )
}

export default UserMessages
