import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log("link is clicked!");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Toggle is {this.state.isToggleOn ? 'On' : 'Off'}</button>
            </div>
        )
    }
}

export default Toggle;

