import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';


class App extends Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyAF-GznDGhnUcUbIAy0TrR1GomdOPPwlDE",
            authDomain: "live-chat-87733.firebaseapp.com",
            databaseURL: "https://live-chat-87733.firebaseio.com",
            projectId: "live-chat-87733",
            storageBucket: "live-chat-87733.appspot.com",
            messagingSenderId: "908455336680"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <div>
                <Header title="Demo Firebase"/>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageList db={firebase} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageBox db={firebase} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
