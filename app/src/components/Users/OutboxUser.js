import React, { useMemo, useState } from "react";
import css from './User.module.scss'
import { shallowEqual, useSelector } from 'react-redux';
import {
    getUsersAllByIdUserName,
    getUsersOutboxByIdCount,
    getUsersOutboxByIdLastMessageId
} from 'store/users/selectors';
import { getMessagesOutboxByIdBody, getMessagesOutboxByIdSubject } from 'store/messages/selectors';
import ClassNames from 'classnames';
import Modal from '../Modal';
import UserMessages from '../Modal/UserMessages';

const OutboxUser = (props) => {
    const { user } = props
    const [ showPopup, setShowPopup ] = useState(false)
    const userName = useSelector(state => getUsersAllByIdUserName(state, user.id), shallowEqual)
    const count = useSelector(state => getUsersOutboxByIdCount(state, user.id), shallowEqual)
    const messageId = useSelector(state => getUsersOutboxByIdLastMessageId(state, user.id), shallowEqual)
    const subject = useSelector(state => getMessagesOutboxByIdSubject(state, messageId), shallowEqual)
    const body = useSelector(state => getMessagesOutboxByIdBody(state, messageId), shallowEqual)
    
    const countersClasses = useMemo(() => {
        return ClassNames(css.Counter, {
            [ css.Invisible ]: !count
        })
    }, [ count ])
    
    const onRowClick = (e) => {
        e && e.stopPropagation && e.stopPropagation()
        setShowPopup(true)
    }
    const onClose = (e) => {
        e && e.stopPropagation && e.stopPropagation()
        setShowPopup(false)
    }
    
    return <>
        <div className={css.UserRow} onClick={onRowClick}>
            <div className={ClassNames(css.UserCol, css.First)}>
                <div className={countersClasses}>{count}</div>
                <div>{userName}</div>
            </div>
            <div className={css.UserCol}>{subject}</div>
            <div className={css.UserCol}>{body}</div>
        </div>
        {showPopup && <Modal onClose={onClose}><UserMessages id={user.id} onClose={onClose}/></Modal>}
    </>
}

export default OutboxUser
