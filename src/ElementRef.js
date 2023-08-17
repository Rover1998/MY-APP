import { Component } from "react"

class ElementRef extends Component {
    handclick() {
        this.refs.myInput.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref="myInput" />
                <input type="button" value="click me to get focus" onClick={this.handclick.bind(this)} />
            </div>
        )
    }
}

export default ElementRef