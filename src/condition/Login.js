import Greeting from "./Greeting";
import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: true };
        this.handleClickLogOut = this.handleClickLogOut.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickLogin() {
        this.setState({isLogin : true});
    }

    handleClickLogOut() {
        this.setState({isLogin : false});
    }

    render() {
        let button = null;
        if (this.state.isLogin) {
            button = <button onClick={this.handleClickLogOut}>logout</button>
        } else {
            button = <button onClick={this.handleClickLogin}>login</button>
        }
        return (
            <div>
                <Greeting isLogin={this.state.isLogin} />
                {button}
            </div>
        );
    }
}

export default Login;
