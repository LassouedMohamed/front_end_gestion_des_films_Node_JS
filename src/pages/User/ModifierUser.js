import React, { Component } from 'react'
import axios from 'axios'
export default class ModifierUser extends Component {
constructor(props) {
    super(props)
    this.state = {
      id:'',
      user:[],
      nom:"",
      email:"",
      password:"",
    }
    }
    loadData = async () => {
        const tab = window.location.pathname.split('/');
        const i = tab[tab.length - 1]
        const response = await axios.get("http://localhost:5000/getUser/"+i);
        this.setState({
            user: [...response.data],
            nom: response.data[0].nom,
            email: response.data[0].email,
            id:i
        });
        }
    async componentDidMount(){
        await this.loadData();
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

    ModifierUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/updateUser/"+this.state.id, 
    {
        nom:this.state.nom,
        email: this.state.email,
    }
    
    );
    console.log(response)
  }
  render() {
    return (
      <form className='container px-5 py-5 my-5 mx-5 border'>
        <div className="form-group">
          <label> Nom :</label>
          <input type="text" className="form-control"  defaultValue={this.state.nom} onChange={this.handleNom}/>
        </div>
        <div className="form-group">
          <label> Email :</label>
          <input type="email" className="form-control"  defaultValue={this.state.email} onChange={this.handleEmail}/>
        </div>
        <div className='row justify-content-around'>
          <button type="submit" className="btn btn-success my-5 col-5" onClick={this.ModifierUser}>Modifier</button>
        </div>
      </form>
    )
  }
}
