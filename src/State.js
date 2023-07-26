import React from "react";

class StateClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({date:new Date()});
    }

    render() {
        return (
        <div>
            <h1>Hello React!</h1>
            <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
        </div>
        );
    }
}

export default StateClock