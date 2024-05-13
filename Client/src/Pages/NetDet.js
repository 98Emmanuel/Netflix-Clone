import React from "react";
import navHook from "./nav";
import queryString from "query-string";
import axios from "axios";
import '../Styles/NetDet.css'


class NetDet extends React.Component{
    constructor(){
        super();
        this.state = {
            movie : []
        }
    }

    componentDidMount() {

        const q = queryString.parse(window.location.search);
        const { _id } = q;
        const int = parseInt(_id);
        console.log(int);

        axios({
            url: `http://localhost:5500/movdet/${int}`,
            method: 'GET',
            headers: { 'Content-Type': 'application/JSON'}
        })
        .then( res => {
            this.setState({ movie: res.data.movies })
        })
        .catch((err => console.log(err)))

    }

    playMovie = (g) => {
        this.props.navigate(`/PlayMov?_id=${g}`);
    }
    render(){
        const { movie } = this.state;
        console.log(movie)
        return(
            <div>
                <img className="netDtimg img_fluid" src={`./images/proj4im${movie._id}.webp`}/>
                <div className="words"> Information
                <div>Id : {movie._id}</div>
                <div>Name : {movie.name}</div>
                <div>Path : {movie.path}</div>
                <div>Description : {movie.description}</div>
               
                <button type="button" class="btn btn-outline-info" onClick={() => this.playMovie(movie._id)}>Play</button>
                </div>
                
            </div>
        )
    }
}

export default navHook(NetDet);