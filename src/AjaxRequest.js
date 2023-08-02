import React from "react";
import $ from 'jquery'

class AjaxRequest extends React.Component {
    constructor (props){
        super(props)
        this.state = {greetingWords : ''}
    }

    componentDidMount() {
        this.serverRequest = $.get(this.props.url, function(result) {
            var content = result;
            this.setState({
                greetingWords: content
            })
        }.bind(this))
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                <p>The welcome words from invoking haowei's api: {this.state.greetingWords}</p>
            </div>
        );
    }
}

export default AjaxRequest