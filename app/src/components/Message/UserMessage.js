import React, { useMemo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import {
    getMessagesAllByIdBody,
    getMessagesAllByIdIsInbox,
    getMessagesAllByIdIsOutbox,
    getMessagesAllByIdIsRead,
    getMessagesAllByIdSubject
} from 'store/messages/selectors';
import ClassNames from 'classnames'
import css from './UserMessage.module.scss'

const UserMessage = (props) => {
    const { id } = props
    
    //const message = useSelector(state => getMessagesAllById(state, id), shallowEqual)
    const isInbox = useSelector(state => getMessagesAllByIdIsInbox(state, id), shallowEqual)
    const isOutbox = useSelector(state => getMessagesAllByIdIsOutbox(state, id), shallowEqual)
    const subject = useSelector(state => getMessagesAllByIdSubject(state, id), shallowEqual)
    const body = useSelector(state => getMessagesAllByIdBody(state, id), shallowEqual)
    const isRead = useSelector(state => getMessagesAllByIdIsRead(state, id), shallowEqual)
    
    const RowClasses = useMemo(() => ClassNames(css.UserMessage, {
        [ css.Inbox ]: isInbox,
        [ css.Outbox ]: isOutbox,
        [ css.IsRead ]: isRead
    }), [ isInbox, isOutbox, isRead ])
    return (
        <div className={RowClasses}>
            <div className={css.MessageBox}>
                <div className={css.Header}>{subject}</div>
                <div className={css.Body}>{body}</div>
            </div>
        </div>
    )
}

export default UserMessage
