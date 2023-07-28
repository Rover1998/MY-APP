import React from "react";

class StateClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            opacity: 1.0
        };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState(preState => ({
            date: new Date(),
            opacity: preState.opacity < 0.09 ? 1.0 : preState.opacity - 0.05
        }));
    }

    render() {
        return (
            <div style={{ fontSize: 10 }, { fontFamily: 'Oxygen' }, { opacity: this.state.opacity }}>
                <h1>Hello React!</h1>
                <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default StateClock