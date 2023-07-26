import React from "react";

class WebSite extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: "baidu",
            url : "https://www.baidu.com"
        }
    }

    render() {
        return(
            <div>
                <Name name={this.state.name} />
                <Url url={this.state.url} />
            </div>
        );
    }
}

class Name extends React.Component{
    render() {
        return(
            <h2>name: {this.props.name}</h2>
        );
    }
}

class Url extends React.Component{
    render() {
        return(
            <a href={this.props.url}>url: {this.props.url}</a>
        );
    }
}

export default WebSite