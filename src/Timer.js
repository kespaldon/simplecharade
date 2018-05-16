import React, { Component } from 'react';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: {}, seconds: 60};
    this.reset = this.reset.bind(this);
  }

  reset() {
    clearInterval(this.timerID);
    this.setState({seconds: 60});
    this.componentDidMount();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let seconds = this.state.seconds - 1;
    this.setState({ seconds: seconds });

    if (seconds === 0) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.seconds}</h1>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CountDown;