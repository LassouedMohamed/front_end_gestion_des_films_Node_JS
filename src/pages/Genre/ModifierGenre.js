import React, { Component } from 'react'
import axios from 'axios';

export default class ModifierGenre extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            genre: [],
            type:""
        }
    }
    loadData = async () => {
        const tab = window.location.pathname.split('/');
        const i = tab[tab.length - 1]
        const response = await axios.get("http://localhost:5000/getGenre/"+i);
        this.setState({
            genre: [...response.data], type: response.data[0].type,
            id:i
        });
        }
    async componentDidMount(){
        await this.loadData();
    }
    handleType = (e) => {
        this.setState({type: e.target.value });
    }

    updateGenre = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/updateGenre/" + this.state.id, {
            id: this.state.genre[0].id,
            type: this.state.type,
        });
    }
  render() {
      return (
        <div className='container'>
              <h1>Modifier Genre</h1>
              <form>
                  {
                      this.state.genre.map(item => <div key={item.id}>
                        <div className="mb-3">
                          <label className="form-label">Id </label>
                          <input type="text" className="form-control" value={item.id} disabled/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Type </label>
                          <input type="text" className="form-control" defaultValue={item.type}  onChange={this.handleType}/>
                        </div>
                          <button onClick={this.updateGenre} className="btn btn-success">Modifier</button>
                      </div>)
                      }
            </form>
        </div>
    )
  }
}
