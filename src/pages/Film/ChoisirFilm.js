import React, { Component } from 'react'
import axios from 'axios';
export default class ChoisirFilm extends Component {

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


    async componentDidMount() {
        await this.loadData();
    }
    render() {
        return (
            <div className='container border'>
                <div className='my-5 row '>

                    {
                        this.state.Films.map(film => (
                            <div className="card mx-5" style={{ width: "18rem" }} key={film.id}>
                                <div className="card-body">
                                    <h4 className="card-title">{film.titre}</h4>
                                    <p className="card-text">
                                        Type : {film.type}
                                        <br />
                                        Description : <br />
                                        {film.description}
                                        <br />
                                        note : {film.note}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
        
        

            </div>
)}
}
