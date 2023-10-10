import React, { Component } from 'react'
import axios from 'axios';

export default class AddFilm extends Component {

  constructor(props) {
    super(props)
    this.state={
      titre:"",
      listeGenre:[],
      genre: "",
      listeRealisateur:[],
      annee_sortie:"",
      realisateur:"",
      duree:"",
      note:0,
      description: "",
      isNote: false,
    }
  }
  
  getGenre = async () => {
    const response = await axios.get("http://localhost:5000/getGenre");
    this.setState({ listeGenre: [...response.data] });
  }
  
  getRealisateur = async () => {
      const response = await axios.get("http://localhost:5000/getRealisateur");
    this.setState({ listeRealisateur: [...response.data] });
  }

  ajouterFilm = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/addFilm", 
    {
      titre:this.state.titre,
      genre: this.state.genre,
      annee_sortie: this.state.annee_sortie,
      realisateur: this.state.realisateur,
      duree: this.state.duree,
      note: this.state.note,
      description: this.state.description,
    }
    );
  }
  
  handleTitre = (e) => {
    this.setState({ titre: e.target.value });
  }
  
  handleNote = (e) => {
    const val = e.target.value;
    if ((val >= 0 && val <= 20))
      this.setState({ note: e.target.value, isNote: true });
    else
      this.setState({isNote: false})
  }

  handleChangeGenre= (e) => {
    this.setState({ genre: e.target.value });
  }
  
  handleChangeRealisateur = (e) => {
    this.setState({ realisateur: e.target.value });
  }
  
  handleAnnee = (e) => {
    this.setState({ annee_sortie: e.target.value });
  }
  
  handleDuree = (e) => {
    this.setState({ duree: e.target.value });
  }

  handleDescription = (e) => {
    this.setState({ description: e.target.value});
  }
  
  async componentDidMount(){
        await this.getGenre();
    await this.getRealisateur();
    if (this.state.listeGenre.length >= 0) {
      this.setState({
        genre: this.state.listeGenre[0].id
      })
    }
    if (this.state.listeRealisateur.length >= 0) {
      this.setState({
        realisateur: this.state.listeRealisateur[0].id
      })
    }
  }
  
  render() {
    return (
      <fieldset className='my-5 border'>
        <form className='container'>
          <div className="mb-3">
            <label className="form-label">Titre</label>
            <input type="text" className="form-control" onChange={this.handleTitre}/>
          </div>
          

          <div className="mb-3">
            <label className="form-label">Note (sur 20)</label>
            <input type="Number" className="form-control" onChange={this.handleNote}/>
          </div>
          {
            this.state.isNote===false?<div className="p-3 mb-2 bg-danger text-white">note comprise entre 0 et 20</div>:<span></span>
          }

          <div className="mb-3">
            <label className="form-label">Genre</label>
            <select onChange={this.handleChangeGenre} className="form-select"
          >
              {
                this.state.listeGenre.map((genre) => (
                  <option key={genre.id} value={genre.id}> 
                  {genre.type}</option>
                ))
          }
            </select>
            
          </div>
          
          <div className="mb-3">
            <label className="form-label">Realisateur</label>
            <select onChange={this.handleChangeRealisateur} className="form-select"
          >
              {
                this.state.listeRealisateur.map((realisateur) => (
                  <option key={realisateur.id} value={realisateur.id}> 
                  {realisateur.nom}</option>
                ))
          }
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Annee</label>
            <input type="Date" className="form-control" onChange={this.handleAnnee}/>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Duree</label>
            <input type="text" className="form-control" onChange={this.handleDuree}/>
          </div>

          <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" onChange={this.handleDescription}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.ajouterFilm}>Ajouter</button>
        </form>
      </fieldset>
    )
  }
}
