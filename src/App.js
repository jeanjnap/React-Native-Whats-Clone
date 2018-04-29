import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default props => (
    <Provider store={createStore(reducers)}>
        <Routes />
    </Provider>
);
