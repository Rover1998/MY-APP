import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import State from './State'
import reportWebVitals from './reportWebVitals';
import WebSite from './Website';
import EventsResolution from './EventsResolution'
import PassParamsToListener from './PassParamsToListener'
import Login from "./condition/Login"
import MailBox from './MailBox'
import ListItem from './ListItem'
import AjaxRequest from './AjaxRequest'
import Form from './FormUpdate'
import FlavorForm from './FlavorForm'
import MultipleForm from './MultipleForm'

// const element = <h1>Hello World!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App bookName={'堂吉诃德'} writer={'塞万提斯'} summary={'是国际声望最高,影响最大的西班牙文学巨制. 可是作者米盖尔.台.塞万提斯.萨阿维德拉一辈子只是一个伤残的军士,潦倒的文人.后世对他的生平缺乏确切的资料'} />
//   </React.StrictMode>
//   );


const appElement = <App bookName={'堂吉诃德'} writer={'塞万提斯'} summary={'是国际声望最高,影响最大的西班牙文学巨制. 可是作者米盖尔.台.塞万提斯.萨阿维德拉一辈子只是一个伤残的军士,潦倒的文人.后世对他的生平缺乏确切的资料'} />
//   </React.StrictMode>;

// function tick() {
//   const element = <div>
//     <h1>Hello World!</h1>
//     <h2>Now is {new Date().toLocaleTimeString()}.</h2>
//   </div>;
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     element
//   );
// }

var style = {
  fontSize: 100,
  color: '#61dafb'
}
class Clock extends React.Component {
  render() {
    return (
      <div>
        <HelloMsg name={this.props.name} />
        <h2>Now is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
class HelloMsg extends React.Component {
  render() {
    return (
      <h1 style={style}>Hello {this.props.name}!</h1>
    );
  }
}
function tick() {
  root.render(
    <Clock date={new Date()} name={"Haowei"} />
  );
}

// class StateClock extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {date:new Date()};
//   }

//   render() {
//       return (
//       <div>
//           <h1>Hello React!</h1>
//           <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//       );
//   }
// }

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function ListNumber(props) {
//   const array = props.numbers;
//   const listItems = array.map(
//     (number, index) =>
//       <ListItem key={index} value={number} />
//   )
//   return <ul>{listItems}</ul>;
// }

const numbers = [1, 2, 3, 4, 5];
// const api = 'http://8.140.205.108:8080/api';
const api = 'http://localhost:8080/api';

root.render(
  <React.StrictMode>
    {appElement}
    <State />
    <WebSite />
    <EventsResolution />
    <PassParamsToListener />
    <Login />
    <MailBox />
    <ListItem numbers={numbers} />
    <AjaxRequest url={api} />
    <Form />
    <FlavorForm />
    <MultipleForm />
  </React.StrictMode>
)

// setInterval(tick, 1);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
