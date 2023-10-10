import React, { Component } from 'react'
import axios from 'axios'

export default class AddRealisateur extends Component {


  constructor(props) {
    super(props)
    this.state={
      nom:""
    }
  }

  ajouterRealisateur = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/addRealisateur", {
        nom : this.state.nom
    });
    console.log(response)
  }
  handleNom = (e) => {
    this.setState({ nom: e.target.value });
  }
  render() {
    return (
        <form className='container'>
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input type="text" className="form-control" onChange={this.handleNom}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.ajouterRealisateur}>Ajouter</button>
      </form>
    )
  }
}
