import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class User extends Component {
  constructor(props) {
        super(props);
        this.state = {
            TabUser: []
        };
    }

    loadData = async () => {
        const response = await axios.get("http://localhost:5000/getUser");
      this.setState({ TabUser: [...response.data] });
      console.log(response.data)
    }
    supprimerUser = async (e) => {
        const response = await axios.get("http://localhost:5000/deleteUser/" + e.target.value);
        await this.loadData();
    }

    async componentDidMount(){
        await this.loadData();
  }
  render() {
    return (
      <div className="container my-5">

                <Link to="/ajouterUser"><button className="btn btn-primary my-5"> Ajouter User </button></Link>

                <table className="table my-5">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.state.TabUser.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nom}</td>
                            <td>{user.email}</td>
                            <td><Link to={{pathname: ("/modifierUser/" +user.id) }}><button className="btn btn-success">Modifier</button> </Link></td>
                            <td><button onClick={this.supprimerUser} className="btn btn-danger" value={user.id}>Supprimer</button> </td>
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
