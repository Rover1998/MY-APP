import React from "react";
import PropTypes from 'prop-types'

class WebSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "baidu",
            url: "https://www.baidu.com"
        }
    }

    render() {
        return (
            <div>
                {/* <Name name={this.state.name} /> */}
                <Name />
                <Url url={this.state.url} />
            </div>
        );
    }
}

class Name extends React.Component {
    // static propTypes = {
    //     name: PropTypes.string
    // };
    render() {
        return (
            <h2>name: {this.props.name}</h2>
        );
    }
}
Name.defaultProps = {
    name: 'wangyi'
}

Name.propTypes = {
    name: PropTypes.string.isRequired
}

class Url extends React.Component {
    render() {
        return (
            <a href={this.props.url}>url: {this.props.url}</a>
        );
    }
}


export default WebSite