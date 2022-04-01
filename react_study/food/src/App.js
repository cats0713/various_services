import React from "react";

class App extends React.Component{
  state = {
    count: 0,
  };
  addNumber = () => {
    this.setState(aa => ({count:aa.count+1}));
  };
  minusNumber = () => {
    this.setState(current => ({count:current.count-1}));
  };

  render(){
    return (<div>
      <h1>class Component : {this.state.count}</h1>
      <button onClick={this.addNumber}>add</button>
      <button onClick={this.minusNumber}>minus</button>
    </div>
    );
  };
}

export default App;