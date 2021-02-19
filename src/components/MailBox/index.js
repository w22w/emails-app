import React from "react";
import css from "./MailBox.module.scss";
import cssMain from "../../containers/Main/Main.module.scss";
import { Scrollbar } from "components";
import { shallowEqual, useSelector } from 'react-redux';
import { getUsersInboxWithMessages, getUsersOutboxWithMessages } from 'store/users/selectors'
import appConstants from 'common/appConstants';
import InboxUser from '../Users/InboxUser';
import OutboxUser from '../Users/OutboxUser';
import history from 'common/history'

const MailBox = (props) => {
    const { direction } = props;
    
    const users = useSelector((state) => {
        return direction === appConstants.destinations.inbox ? getUsersInboxWithMessages(state) : getUsersOutboxWithMessages(state)
    }, shallowEqual)
    
    const onGoHome = (e) => {
        e && e.stopPropagation && e.stopPropagation()
        history.push(appConstants.router.root)
    }
    
    return (
        <div className={css.Container}>
            <div className={css.MailBox}>
                <div className={css.Header}>
                    <div className={cssMain.HomeButton} onClick={onGoHome}>&#127968;</div>
                    {direction}</div>
                <div className={css.Body}>
                    <Scrollbar>
                        <div>
                            {users.map(user => (
                                direction === appConstants.destinations.inbox ? <InboxUser user={user} key={user.id}/> :
                                    <OutboxUser user={user} key={user.id}/>
                            ))}
                        </div>
                        {(users && users.length === 0) && (
                            <div className={css.NoMails}>No mails yet</div>
                        )}
                    </Scrollbar>
                </div>
            </div>
        </div>
    );
};

export default MailBox;
