import React, { Component } from 'react'
import axios from 'axios'

export default class ModifierRealisateur extends Component {

  constructor(props) {
        super(props)
        this.state = {
            id: "",
            realisateur: [],
            nom:""
        }
    }
    loadData = async () => {
        const tab = window.location.pathname.split('/');
        const i = tab[tab.length - 1]
        const response = await axios.get("http://localhost:5000/getRealisateur/"+i);
        this.setState({
            realisateur: [...response.data], type: response.data[0].type,
            id:i
        });
        }
    async componentDidMount(){
        await this.loadData();
    }
    handleNom = (e) => {
        this.setState({nom: e.target.value });
    }

    updateRealisateur = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/updateRealisateur/" + this.state.id, {
            id: this.state.realisateur[0].id,
            nom: this.state.nom,
        });
    }
  render() {
      return (
        <div className='container'>
              <h1>Modifier Realisateur</h1>
              <form>
                  {
                      this.state.realisateur.map(item => <div key={item.id}>
                        <div className="mb-3">
                          <label className="form-label">Id </label>
                          <input type="text" className="form-control" value={item.id} disabled/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Nom </label>
                          <input type="text" className="form-control" defaultValue={item.nom} onChange={this.handleNom}/>
                        </div>
                          <button onClick={this.updateRealisateur} className="btn btn-success">Modifier</button>
                      </div>)
                      }
            </form>
        </div>
    )
  }
}
