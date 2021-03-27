import logo from './logo.svg';
import './App.css';
import {setState, Component} from "react"


  class App extends Component{
  constructor() {
    super();
    this.state = { age: 50};
    
  }

handleClickup = ()=>{
 let newAge = this.state.age + 5;
 this.setState({age:newAge});
  };

handleClickdown = ()=>{
  let newAge = this.state.age - 5;
  this.setState({age:newAge});
    };

handleClick = ()=>{
  let newAge = this.state.age * 10;
  this.setState({age:newAge});
    };
   

render() {
    return(
    <div>
      <h1><i> Age is {this.state.age}</i></h1>
      <button onClick={this.handleClickup}>Clickup</button>
      <button onClick={this.handleClickdown}>Clickdown</button>
      <button onClick={this.handleClick}>X10</button>


    </div>
    );
  }
}
export default App;

 