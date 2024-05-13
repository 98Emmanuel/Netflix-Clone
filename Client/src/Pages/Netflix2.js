import React from "react";
import'../Styles/Netflix2.css'
import axios from 'axios'; 
import Modal from 'react-modal';
import navHook from "./nav";


const customStyles = {
  overlay:{
      backgroundColor: "rgba(0,20,0,0.8)"
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


class Netflix2 extends React.Component{

  constructor(){
    super();
    this.state = {
      mov : [],
      mova : [],
      movi : [],
      movieModal : false,
      p : undefined,
      movie : [],
      inputText : undefined,
      suggestion : []

    }
  }

  componentDidMount() {
 
    // Call forthe complete list of movies
    axios({
        url: "http://localhost:5500/list",
        method: 'get',
        headers: { 'Content-Type': 'application/JSON'}
    })
    .then( res => {
        this.setState({ mova: res.data.movies})
    })
    .catch((err => console.log(err)))

    }


  
   
  

    handlePlay = (x) => {// Not working
      console.log(x)

      axios({
        url: `http://localhost:5500/show/${x}`,
        method: 'GET',
        headers: { 'Content-Type': 'video/mp4'},
       
    })
    .then( res => {
        this.setState({ movie: res.data.movies })
    })
    .catch((err => console.log(err)))

    }

    handleInput = (event) => {
      const { mova, mov } = this.state;
      const inputText = event.target.value;
        
      let suggestion = [];
  
      suggestion = mova.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
      this.setState({ inputText, suggestion });
      console.log(suggestion)
  }

    showSuggestion = () => {
      const { inputText, suggestion } = this.state;
  
      if(suggestion.length === 0 && inputText === undefined){
          return null;
      }
  
      if(suggestion.length > 0 && inputText === ''){
          return null;
      }
  
      if(suggestion.length === 0 && inputText){
          return (
              <li className="suggList">No Results Found !!</li>
          )
      }
  
      return(
          suggestion.map((item, index) => (
              <li key={index} className="suggList" onClick={() => this.selectMovie(item._id)}>
                  <img src={`./images/proj4im${item._id}.webp`} alt='picture1' className="suggImg" />
                  <span className="suggName">{item.name}</span>   {/* restaurant name */}
                  
  
              </li>
          ))
      )
  }

  selectMovie = (m) => {
    this.props.navigate(`/NetDet?_id=${m}`);
  }

  
  handleNavigate = (ss) => {
     this.props.navigate(`/NetDet?_id=${ss}`); // Here after the question mark, its me to decide the URL title of the next page
    console.log(ss)

  }
     


    render(){
      const { mov, movieModal } =this.state;
      //console.log(movi)
      
        return(

        <div>


                        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="./images/Netflix Logo.png" height="40px" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">TV Shows</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">New & Popular</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">My List</a>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange = {this.handleInput}/>
              {/*Suggestion box*/}
              <ul className = "suggestionBox">
                        {this.showSuggestion()}
                    </ul>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div class="wrapper1 bg-dark">

      <div class="wrapper">
        <div class="item" ><img class="image img_fluid" src="./images/proj4im5.webp" onClick={() => this.handleNavigate(1) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im6.webp" onClick={() => this.handleNavigate(2) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im7.webp" onClick={() => this.handleNavigate(3) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im8.webp" onClick={() => this.handleNavigate(4) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im9.webp" onClick={() => this.handleNavigate(5) }/></div>
        <div class="item"><img class="image img_fluid"src="./images/proj4im10.webp" onClick={() => this.handleNavigate(6) }/></div>
      </div>

      <div class="wrapper">
        <div class="item"><img class="image img_fluid" src="./images/proj4im1.webp" onClick={() => this.handleNavigate(7) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im2.webp" onClick={() => this.handleNavigate(8) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im3.webp" onClick={() => this.handleNavigate(9) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im4.webp" onClick={() => this.handleNavigate(10) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im5.webp" onClick={() => this.handleNavigate(1) }/></div>
        <div class="item"><img class="image img_fluid" src="./images/proj4im6.webp" onClick={() => this.handleNavigate(2) }/></div>
      </div>

      </div>

      <Modal
        isOpen={movieModal}
        style={customStyles}
              >
        <div onClick={() => this.handleMovies('movieModal', false)} className="close"><i class="bi bi-x-lg"></i></div>

      <div>{mov._id}</div>
       <div>{mov.name}</div>
       <div>{mov.path}</div>
       <div>{mov.description}</div>
       <a type="button" class="btn btn-outline-success" href={`./images/video${mov._id}.mp4`}>Play</a>
       <button type="button" class="btn btn-outline-info">Play</button>
       
      
    
      
 
     
     
     
     {/* {
      mov?.map((i) => {
        console.log(i)
        return(
          <h2>{i.name}</h2>
          
        )
       
      })
      }  */}  
      </Modal>
            </div>
        )
    }
}


export default navHook(Netflix2);