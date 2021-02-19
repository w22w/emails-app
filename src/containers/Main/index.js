import appConstants from "common/appConstants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Main.module.scss";
import Modal from 'components/Modal';
import YesNoDialog from 'components/Modal/YesNoDialog';
import { persistor } from 'store/store'
import { useDispatch } from 'react-redux';
import { clearUsers } from 'store/users/actions';
import { clearMessages } from 'store/messages/actions';

const Main = () => {
    const dispatch = useDispatch()
    const [ showDialog, setShowDialog ] = useState(false)
    const onClickCleanUp = (e) => {
        e && e.stopPropagation && e.stopPropagation()
        setShowDialog(true)
    }
    
    const onClose = (e) => {
        e && e.stopPropagation && e.stopPropagation()
        setShowDialog(false)
    }
    
    const onSuccess = (e) => {
        e && e.stopPropagation && e.stopPropagation()
        persistor.purge()
        dispatch(clearMessages())
        dispatch(clearUsers())
        setShowDialog(false)
    }
    
    return (
        <div className={css.Container}>
            <div className={css.Content}>
                <div>
                    <div className={css.LinkBlock}>
                        <Link to={appConstants.router.sendForm}>Send e-mail</Link>
                    </div>
                    <div className={css.LinkBlock}>
                        <Link to={appConstants.router.inbox}>Inbox</Link>
                    </div>
                    <div className={css.LinkBlock}>
                        <Link to={appConstants.router.outbox}>Outbox</Link>
                    </div>
                    <div className={css.LinkBlock}>
                        <button onClick={onClickCleanUp} className={css.RemoveButton}>Remove persistent data</button>
                    </div>
                    
                    {showDialog && <Modal onClose={onClose} autoHeight>
                        <YesNoDialog text={<>
                            <div>It will remove all data from the persistent storage.</div>
                            <div>Are you sure?</div>
                        </>} onSuccess={onSuccess} header='Cleaning up storage' onClose={onClose}/>
                    </Modal>}
                </div>
            </div>
        </div>
    );
};

export default Main;
