import React from "react";

const Counter = ()=>{
  state = {
    number:0
  }
  handleIncrease = ()=>{
    this.setState({
      number: this.state.number + 1
    });
  }
  handleDecrease = () => {
    this.setState({
      number: this.state.number -1
    });
  }

  return(
    <div>
      <h1>카운터</h1>
      <div>값: {this.state.number}</div>
      <button onClick = {this.handleIncrease}>+</button>
      <button onClick = {this.handleDecrease}>-</button>
    </div>
  )
}

export default Counter;