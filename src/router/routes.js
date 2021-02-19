import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Inbox, Main, Outbox, SendForm } from "containers";
import appConstants from "common/appConstants";

const Routs = () => {
    const { location } = useLocation();
    return (
        <Switch location={location}>
            <Route path={appConstants.router.root} exact component={Main}/>
            
            <Route path={appConstants.router.sendForm} component={SendForm}/>
            
            <Route path={appConstants.router.inbox} component={Inbox}/>
            
            <Route path={appConstants.router.outbox} component={Outbox}/>
        </Switch>
    );
};

export default Routs;
