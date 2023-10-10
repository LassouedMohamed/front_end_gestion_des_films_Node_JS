import React, { Component } from 'react'
import axios from 'axios'
import { Navigate   } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:"",
      password: "",

    }
  }
    
    handleEmail = (e) => {
    this.setState({ email: e.target.value });
    }
    handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  Connecter = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/auth", 
    {
      email: this.state.email,
      password:this.state.password,
    }
    );
    console.log(response.data[0])
    if (response.data[0].role ==="admin") {
      <Navigate to="/home" replace={ true} />
   }
    if (response.data[0].role ==="user") {
      <Navigate to="/ChoisirFilms" replace={ true} />
   }
    
  }
  
  render() {
    return (
      <form className='container px-5 py-5 my-5 mx-5 border'>
        <div className="form-group">
          <label> Email :</label>
          <input type="email" className="form-control"  placeholder="Entrer email" onChange={this.handleEmail}/>
        </div>
        <div className="form-group">
          <label> Mot de passe :</label>
          <input type="password" className="form-control" placeholder="Password" onChange={this.handlePassword}/>
        </div>
        <div className='row justify-content-around'>
          <button type="submit" className="btn btn-success my-5 col-5" onClick={this.Connecter}>Connecter</button>
          <button type="submit" className="btn btn-primary my-5 col-5">Creer un compte</button>
        </div>
      </form>
    )
  }
}
