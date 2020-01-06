import React ,{Component} from 'react';
import axios from 'axios';
import "./App.css"
import UserFrom from "./components/UserForm";
class App extends Component {

  state={
    repos:null,
    followers:null,
    following:null
  }
  getUser=(e)=>
  {
    e.preventDefault();
    const user=e.target.elements.username.value;
    if(user)
    {
    axios.get(`https://api.github.com/users/${user}`) //promise
    .then((res)=> {
      console.log(res);
      const reposdata=res.data.public_repos;
      this.setState({repos:reposdata});
      console.log(reposdata)
      const followers=res.data.followers;
      this.setState({followers:followers});
      const following=res.data.following;
      this.setState({following});
    })
    console.log(user);
  }
  else
  return;
  } 
  render() {
    console.log(this.getUser)
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">HTTP Calls in React</h1>
      </header>
      <UserFrom getUser={this.getUser}/>
    
      {this.state.repos?<p>Number of repos: {this.state.repos}</p>:
    <p>Please enter a username</p>} 
    
    <p>Number of followers: {this.state.followers}</p>
    <p>Number of following: {this.state.following}</p>
    </div>
  );
  }
}

export default App;
