import React from "react";

class MailBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { unreadMsg: ['Adapt', 'Adopt', 'Previous', 'Precious'], warning: false };
    }

    // RenderMsgs = () => {
    //     const array = this.state.unreadMsg;
    //     return(
    //         array.map((msg, index) => <span key={index}>{msg} </span>)
    //     );
    // }

    RenderMsgs = () => {
        const array = this.state.unreadMsg;
        return(
            array.map((msg, index) => <li key={index}>{msg} </li>)
        );
    }

    toggle = () => {
        this.setState(preState => ({
            warning: !preState.warning
        }));
    }

    render() {
        return (
            <div>
                <h2>Hello!</h2>
                {this.state.unreadMsg.length > 0 && <h3>you have {this.state.unreadMsg.length} unread meassages!</h3>}<ul>{this.RenderMsgs()}</ul>
                <br/>
                <PrintWarning warning={this.state.warning} />
                <button onClick={this.toggle} >{this.state.warning ? 'Hide' : 'Show'}</button>
            </div>
        );
    }
}

function PrintWarning(props) {
    const warning = props.warning;
    if (warning) {
        return (
            <h2>warning</h2>
        );
    } else {
        return null;
    }
}

export default MailBox;