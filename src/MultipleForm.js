import React from "react";
import { Component } from "react";

class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
            guestNumber: 0
        }
    }

    handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            this.setState({ isChecked: e.target.checked })
        } else {
            this.setState({ guestNumber: e.target.value })
        }
    }

    render() {
        return (
                <form>
                    <label>
                        Current checkbox status: {this.state.isChecked ? 'checked' : 'unchecked'}
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Current guest number: {this.state.guestNumber}
                        <input type="number" value={this.state.guestNumber} onChange={this.handleChange}/>
                    </label>
                </form>

        )
    }
}

export default MultipleForm;