import React from "react";
class Greeting extends React.Component {
    render() {
        const status = this.props.isLogin;
        let text = null;
        if (status) {
            text = <h2>Welcome back, long time no see!</h2>;
        } else {
            text = <h2>Please login first!</h2>;
        }
        return (
            text
        );
    }
}

export default Greeting;