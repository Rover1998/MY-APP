import React from "react"

var H1style = {
    fontSize: 100,
    color: '#61dafb'
}

class Book extends React.Component {
    render() {
        return (
            <h1 style={H1style}>{this.props.bookName}</h1>
        )
    }
}

class Writer extends React.Component {
    render() {
        return (
            <h2>writer: {this.props.writer}</h2>
        )
    };
}

class Summary extends React.Component {
    render() {
        return (
            <h3>Summary: {this.props.summary}</h3>
        )
    };
}


function App(props) {
    return (
        <div>
            <Book bookName={props.bookName} />
            <Writer writer={props.writer} />
            <Summary summary={props.summary} />
        </div>
    );
}

export default App;