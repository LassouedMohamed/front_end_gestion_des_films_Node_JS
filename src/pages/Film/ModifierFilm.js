import React, { Component } from 'react'
import axios from 'axios'
export default class ModifierFilm extends Component {
constructor(props) {
        super(props)
        this.state = {
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
    loadData = async () => {
        const tab = window.location.pathname.split('/');
        const i = tab[tab.length - 1]
        const response = await axios.get("http://localhost:5000/getFilm/"+i);
        this.setState({
            film: [...response.data],
            titre: response.data[0].titre,
            listeGenre:[],
            genre: response.data[0].type,
            listeRealisateur:[],
            annee_sortie: response.data[0].annee_sortie,
            realisateur: response.data[0].nom,
            duree: response.data[0].duree,
            note: response.data[0].note,
            description: response.data[0].description,
            id:i
        });
    }
    
    getGenre = async () => {
        const response = await axios.get("http://localhost:5000/getGenre");
        this.setState({ listeGenre: [...response.data] });
    }
  
    getRealisateur = async () => {
      const response = await axios.get("http://localhost:5000/getRealisateur");
        this.setState({ listeRealisateur: [...response.data] });
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

    updateFilm = async (e) => {
      e.preventDefault();
      const response = await axios.post("http://localhost:5000/updateFilm/" + this.state.id, {
            titre: this.state.titre,
            genre: this.state.genre,
            annee_sortie: this.state.annee_sortie,
            realisateur: this.state.realisateur,
            duree: this.state.duree,
            note: this.state.note,
            description: this.state.description,
        });
    }

    async componentDidMount() {
      await this.loadData();
      await  this.getGenre();
      await this.getRealisateur();
    }
  render() {
    return (
      <fieldset className='my-5 border'>
        <form className='container'>
          <div className="mb-3">
            <label className="form-label">Titre</label>
            <input type="text" className="form-control" defaultValue={this.state.titre} onChange={this.handleTitre}/>
          </div>
          

          <div className="mb-3">
            <label className="form-label">Note (sur 20)</label>
            <input type="Number" className="form-control" defaultValue={this.state.note} onChange={this.handleNote}/>
          </div>
          {
            this.state.isNote===false?<div className="p-3 mb-2 bg-danger text-white">note comprise entre 0 et 20</div>:<span></span>
          }

          <div className="mb-3">
            <label className="form-label">Genre</label>
                    <select onChange={this.handleChangeGenre} className="form-select"
              placeholder={this.state.genre}
              defaultValue value={this.state.genre}
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
                        defaultValue={this.state.realisateur}>
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
            <input type="Date" className="form-control" defaultValue={this.state.annee_sortie} onChange={this.handleAnnee}/>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Duree</label>
            <input type="text" className="form-control" defaultValue={this.state.duree} onChange={this.handleDuree}/>
          </div>

          <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" defaultValue={this.state.description} onChange={this.handleDescription}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.updateFilm}>Ajouter</button>
        </form>
      </fieldset>
    )
  }
}
