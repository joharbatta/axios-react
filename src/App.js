import React ,{Component} from 'react';
import "./App.css"
import UserFrom from "./components/UserForm";
class App extends Component {

  getUser=(e)=>
  {
    e.preventDefault();
    const user=e.target.elements.username.value;
    console.log(user);
  } 
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">HTTP Calls in React</h1>

      </header>
      <UserFrom getUser={this.getUser}/>
    </div>
  );
  }
}

export default App;
