import React from "react";
import { Component } from "react";

class FlavorForm extends Component {
    constructor(props) {
        super(props)
        this.state = { value: 'bd' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert('your select is' + this.state.value)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>select your favorite website
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='gg'>google</option>
                        <option value='bd'>baidu</option>
                        <option value='bi'>bing</option>
                        <option value='gi'>git</option>
                    </select>
                </label>

                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default FlavorForm