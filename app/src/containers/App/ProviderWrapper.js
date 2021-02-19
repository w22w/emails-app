import React from "react";
import { Provider } from "react-redux";
import history from "common/history";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "store/store";

const ProviderWrapper = ({ store, children }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>{children}</Router>
        </PersistGate>
    </Provider>
);

export default ProviderWrapper;
