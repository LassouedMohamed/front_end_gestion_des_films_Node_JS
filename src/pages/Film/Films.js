import React, { Component } from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom';
export default class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Films: []
        };
  }
  loadData = async () => {
      const response = await axios.get("http://localhost:5000/getFilm");
    this.setState({ Films: [...response.data] });
  }
  supprimerGenre = async (e) => {
      const response = await axios.get("http://localhost:5000/deleteFilm/" + e.target.value);
      await this.loadData();
  }

  async componentDidMount(){
      await this.loadData();
  }
  render() {
    return (
      <div className='container border'>
        <Link to="/ajouterFilms"><button className="btn btn-primary my-5"> Ajouter film </button></Link>
        <div className='my-5 row '>

          {
            this.state.Films.map(film => (
                <div className="card mx-5" style={{width:"18rem"}} key={film.id}>
                  <div className="card-body">
                    <h4 className="card-title">{film.titre}</h4>
                  <p className="card-text">
                    Type : {film.type}
                    <br />
                    Description : <br/>
                    {film.description}
                    <br />
                    note : {film.note}
                  </p>

                  <div className="row justify-content-around">
                    <div className="col-5">
                      <Link to={{pathname: ("/modifierFilm/" +film.id) }}><button className="btn btn-success">Modifier</button> </Link>
                    </div>
                    <div className="col-5">
                      <button onClick={this.supprimerGenre} className="btn btn-danger" value={film.id}>Supprimer</button>
                    </div>
                  </div>
                
                </div>
              </div>
              ))
          }

        </div>
        
        

      </div>
    )
  }
}
