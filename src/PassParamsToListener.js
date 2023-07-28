import React, { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = { welcome: 'Hello React!' }
    }

    preventDefault(words, e) {
        e.preventDefault();
        alert(words);
    }

    render() {
        return (
            <a href="https://reactjs.org" target="_blank" rel="noreferrer" onClick={this.preventDefault.bind(this,this.state.welcome)} >Learn React</a>
        );
    }
}

export default Alert;