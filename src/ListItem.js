import React from "react";

const numbers = [1, 2, 3, 4, 5];
function ListItem(props) {
    return <li>{props.value}</li>;
}

function ListNumber(props) {
    const array = props.numbers;
    const listItems = array.map(
        number =>
            <ListItem key={number.toString()} value={number} />

    );
    return <ul>{listItems}</ul>;
}



export default ListNumber;