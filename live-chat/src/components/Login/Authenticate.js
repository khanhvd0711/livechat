import React, {Component} from 'react';
import './Authenticate.css';
// import {PostData} from './PostData';

class Authenticate extends Component {
    constructor(props){
        super(props);
        // require module
        this.state = {
            username: '',
            password: '',
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        console.log('Login')
    }

    onChange(e){
        this.setState({
           [e.target.name] : e.target.value,
        });
    }

    render() {
        return (
            <div className="loginWrp">

                <label>Tên đăng nhập</label>
                <input
                    type="text"
                    className="txtUser"
                    name="username"
                    placeholder="Tên đăng nhập"
                    onChange={this.onChange}/>
                <label>Mật khẩu</label>
                <input
                    type="password"
                    className="txtPassword"
                    name="password"
                    placeholder="Mật khẩu"
                    onChange={this.onChange}/>
                <input type="submit" value="Đăng nhập" className="loginBtn" onClick={this.login} />
            </div>
        )
    }
}

export default Authenticate;