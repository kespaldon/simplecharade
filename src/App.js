import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import CountDown from './Timer.js';
import items from './data/items.js';

console.info(items);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      seconds: 35,
      item: items[Math.floor(Math.random()*items.length)],
      classes: {
        timer: "displayed"
      }
    };
    this.nextItem = this.nextItem.bind(this);
  }

  nextItem() {
    let newItem = items[Math.floor(Math.random()*items.length)];
    this.componentWillUnmount();
    this.setState({
      seconds: 60,
      item: newItem,
      classes: {
          timer: "displayed"
        }
    });
    this.componentDidMount();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() { // game over
    this.setState({item: "Game Over!"});
    clearInterval(this.timerID);
  }

  tick() {
    let seconds = this.state.seconds - 1;
    this.setState({ seconds: seconds });

    if (seconds === 0) {
      this.setState({classes: {timer: "timer-over"}});
      this.componentWillUnmount();
    } else if (this.state.seconds >= 10 && this.state.seconds <= 30) {
      this.setState({classes: {timer: "timer-warning"}});
    } else if (this.state.seconds <= 10) {
      this.setState({classes: {timer: "timer-danger"}});
    } else {
      this.setState({classes: {timer: "timer-normal"}});
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className={this.state.classes.timer}>{this.state.seconds}</h1>
        <h1 className="charade-title">{this.state.item}</h1>
        <button onClick={this.nextItem}>Next Item</button>
      </div>
      );
  }
}
export default App;
