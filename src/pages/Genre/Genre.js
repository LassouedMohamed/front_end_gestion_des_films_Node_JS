import React, { Component } from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom';
export default class Genre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tabgenre: []
        };
    }

    loadData = async () => {
        const response = await axios.get("http://localhost:5000/getGenre");
        this.setState({ Tabgenre: [...response.data] });
    }
    supprimerGenre = async (e) => {
        const response = await axios.get("http://localhost:5000/deleteGenre/" + e.target.value);
        await this.loadData();
    }

    async componentDidMount(){
        await this.loadData();
  }
    render() {
        return (
            <div className="container my-5">

                <Link to="/ajouterGenre"><button className="btn btn-primary my-5"> Ajouter genre </button></Link>

                <table className="table my-5">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Type</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.state.Tabgenre.map(genre => (
                        <tr key={genre.id}>
                            <td>{genre.id}</td>
                            <td>{genre.type}</td>
                            <td><Link to={{pathname: ("/modifierGenre/" +genre.id) }}><button className="btn btn-success">Modifier</button> </Link></td>
                            <td><button onClick={this.supprimerGenre} className="btn btn-danger" value={genre.id}>Supprimer</button> </td>
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
