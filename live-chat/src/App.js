import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import MessageList from './components/MessageList';
// import Header from './components/Header';
import MessageBox from './components/MessageBox';
import Authenticate from './components/Login/Authenticate';


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
                <div className="loginForm">
                    <Authenticate/>
                </div>
                <div className="nChat">
                    <div className="chat_top">
                        <div className="supportInfo">
                            <div className="spImg">
                                <img alt="" src={'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p160x160/35299905_2240657562620977_956875553422442496_n.jpg?_nc_cat=104&oh=5e02df68fdf52db8e4ef49ae3b4e895b&oe=5C24AE57'}/>
                            </div>
                            <div className="spInfor">
                                <p className="spName">Vũ Duy Khánh ▾</p>
                                <p className="spHotLine">(024) 7305 0105</p>
                            </div>
                            <a className="logoNhanh">
                                <img alt="" src={'https://nhanh.vn/images/logo/nhanh_black2.png'}/>
                            </a>
                        </div>
                    </div>
                    <div className="chat_body">
                        <div className="box_chat">
                            <MessageList db={firebase} />
                        </div>
                    </div>
                    <div className="chat_footer">
                        <MessageBox db={firebase} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
