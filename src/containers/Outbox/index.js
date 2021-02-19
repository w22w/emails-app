import React from "react";
import css from '../Inbox/Box.module.scss'
import { MailBox } from 'components'
import appConstants from "common/appConstants";

const Inbox = () => {
  return (<div className={css.Container}>
    <MailBox direction={appConstants.destinations.outbox}></MailBox>
  </div>);
};

export default Inbox;

