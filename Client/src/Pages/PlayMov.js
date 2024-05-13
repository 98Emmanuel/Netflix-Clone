import React from "react";
import navHook from "./nav";
import axios from "axios";
import queryString from "query-string";
import '../Styles/PlayMov.css'


class PlayMov extends React.Component{
    constructor(){
        super();
        this.state = {
            movy : []
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
            this.setState({ movy: res.data.movies })
        })
        .catch((err => console.log(err)))

    }

    render(){
        const { movy } = this.state;
        return(
            <div>
                <video className="movy" controls src={`./images/video${movy._id}.mp4`}></video>
            </div>
        )
    }
}

export default navHook(PlayMov);