import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

console.disableYellowBox = true;

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBrVuAtFlsH6GZ9zewlqqK5iyzlDynZwes",
            authDomain: "whatsapp-clone-a1e00.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-a1e00.firebaseio.com",
            projectId: "whatsapp-clone-a1e00",
            storageBucket: "whatsapp-clone-a1e00.appspot.com",
            messagingSenderId: "600196849959"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
