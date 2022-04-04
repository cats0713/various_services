import React from "react";

class App extends React.Component{
  state = {
    isLoding:true,
    movies:[],
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoding:false});
    },3000);
  }

  render(){
    const {isLoding} = this.state;
    return (<div>
      {isLoding? 'Loding' : 'ready'}
    </div>
    );
  };
}

export default App;