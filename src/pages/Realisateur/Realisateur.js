import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Realisateur extends Component {

  constructor(props) {
        super(props);
        this.state = {
            tabRealisateur: []
        };
    }

    loadData = async () => {
        const response = await axios.get("http://localhost:5000/getRealisateur");
        this.setState({ tabRealisateur: [...response.data] });
    }
    supprimerRealisateur = async (e) => {
        const response = await axios.get("http://localhost:5000/deleteRealisateur/" + e.target.value);
        await this.loadData();
    }

    async componentDidMount(){
        await this.loadData();
  }
    render() {
        return (
            <div className="container my-5">

                <Link to="/ajouterRealisateur"><button className="btn btn-primary my-5"> Ajouter Realisateur </button></Link>

                <table className="table my-5">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nom</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.state.tabRealisateur.map(realisateur => (
                        <tr key={realisateur.id}>
                            <td>{realisateur.id}</td>
                            <td>{realisateur.nom}</td>
                            <td><Link to={{pathname: ("/modifierRealisateur/" +realisateur.id) }}><button className="btn btn-success">Modifier</button> </Link></td>
                            <td><button onClick={this.supprimerRealisateur} className="btn btn-danger" value={realisateur.id}>Supprimer</button> </td>
                        </tr>
                    )
                    )
                }
                    </tbody>
                </table>
            </div>
    )
  }
}
