import React from "react";
import { Component } from "react";

class Content extends Component {

    render() {
        return (
            <div>
                <input type="text" value={this.props.content} onChange={this.props.updateContent}></input>
                <h3>{this.props.content}</h3>
            </div>
        )
    }
}

class ContentUpdater extends Component {
    constructor(props) {
        super(props);
        this.state = {content : 'example input'}
    }

    updateContent = (e) => {
        this.setState ({
            content : e.target.value
        })
    }

    render () {
        return(
            <Content content={this.state.content} updateContent={this.updateContent} />
        )
    }

}

export default ContentUpdater