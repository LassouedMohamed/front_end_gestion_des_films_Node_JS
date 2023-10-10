import React, { Component } from 'react'
import axios from 'axios'
export default class AjouterUser extends Component {

    constructor(props) {
    super(props)
    this.state={
      nom:"",
      email:"",
      password:"",
    }
    }
    
    handleNom = (e) => {
    this.setState({ nom: e.target.value });
    }
    
    handleEmail = (e) => {
    this.setState({ email: e.target.value });
    }
    handlePassword = (e) => {
    this.setState({ password: e.target.value });
    }

    ajouterUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/addUser", 
    {
        nom:this.state.nom,
        email: this.state.email,
        password: this.state.password,
        role:"user"
    }
    
    );
    console.log(response)
  }
  render() {
    return (
      <form className='container px-5 py-5 my-5 mx-5 border'>
        <div className="form-group">
          <label> Nom :</label>
          <input type="text" className="form-control"  placeholder="Entrer nom" onChange={this.handleNom}/>
        </div>
        <div className="form-group">
          <label> Email :</label>
          <input type="email" className="form-control"  placeholder="Entrer email" onChange={this.handleEmail}/>
        </div>
        <div className="form-group">
          <label> Mot de passe :</label>
          <input type="password" className="form-control" placeholder="Password" onChange={this.handlePassword}/>
        </div>
        <div className='row justify-content-around'>
          <button type="submit" className="btn btn-success my-5 col-5" onClick={this.ajouterUser}>Ajouter</button>
        </div>
      </form>
    )
  }
}
