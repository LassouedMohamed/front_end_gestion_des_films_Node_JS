import React, { Component } from 'react'
import axios from 'axios';
export default class AddGenre extends Component {

  constructor(props) {
    super(props)
    this.state={
      type:""
    }
  }

  ajouterGenre = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/addFilm", 
    {
        type : this.state.type
    }
    
    );
    console.log(response)
  }
  handleType = (e) => {
    this.setState({ type: e.target.value });
  }
  render() {
    return (
        <form className='container'>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <input type="text" className="form-control" onChange={this.handleType}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.ajouterGenre}>Ajouter</button>
      </form>
    )
  }
}
