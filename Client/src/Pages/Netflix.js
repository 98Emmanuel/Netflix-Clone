import React from "react";
import '../Styles/Netflix.css'
import navHook from "./nav";

class Netflix extends React.Component{

    handleStart = () => {
        this.props.navigate(`/netflix2`);
    }

    render(){
        const myStyles = {
            height: "100px;" ,
            textAlign: "left;"
        };

        return (
            <div>
                 <div id="wrapper" className="bg-dark">
    <div id="div1">
        
        <div className="row">{/*<!--1-->*/}
            <div className="col-1 border-opacity-0  mt-5" style = {{height : "50px;"}}></div>

            <div className="col-5 border-opacity-0  mb-2" style={myStyles}>
              <img src="./images/Netflix Logo.png" height="150px" />  
            </div>
            <div className="col-3 border-opacity-0 mt-5" style={{height: "50px;"}}></div>
            
            <div className="col-1 border-opacity-0  mt-5" style = {{height : "50px;"}}>
                <button type="button" className="btn btn-danger mt-2 signIn">Sign In</button>
            </div>

            <div className="col-1 border-opacity-0  mt-5" style = {{height : "50px;"}}></div>
            <div className="col-1 border-opacity-0  mt-5" style = {{height : "50px;"}}></div>
        </div>
        
        <div className="row">{/*<!--2-->*/}
            <div className="col-1 border-opacity-0 row2"></div>
            <div className="col-10 border-opacity-0 text-light text-center unlimov">
                Unlimited movies, TV shows, and more
            </div>

            <div className="col-1 border-opacity-0 row2i" ></div>
        </div>

        <div className="row">{/*<!--3-->*/}
            <div className="col-4 border-opacity-0 anywhere"></div>
            <div className="col-4 border-opacity-0 fs-4 pt-1 text-light anywhere">
            Watch anywhere. Cancel Anytime.
            </div>

            <div className="col-4 border-opacity-0 anywhere"></div>
        </div>

        <div className="row">{/*<!--4-->*/}
            <div className="col-2 border-opacity-0 anywhere"></div>
            <div className="col-8 border-opacity-0 text-center pt-2 text-light ready" >
                Ready to watch? Enter your email to create or restart your membership.
            </div>

            <div className="col-2 border-opacity-0 anywhere"></div>
        </div>

        <div className="row">{/*<!--5-->*/}
            <div className="col-3 border-opacity-0 anywhere"></div>
            
            <div className="col-3 border-opacity-0 anywhere">
            <input type="email" placeholder="Email address"  className="bg-secondary border border-secondary email" />
            </div>

            <div className="col-3 border-opacity-0 anywhere">
                <button type="button" className="btn btn-danger fs-4 gtstarted" onClick={this.handleStart}>Get Started { '>' }</button>
            </div>

            <div className="col-3 border-opacity-0 anywhere" ></div>
        </div>

    </div>

    <div id="div2" className="container_fluid d-flex">
        <div id="div2i" className="d-flex">
            <div id="div2ia"><h2 className="fw-bold fs-1 text-light">Enjoy on your TV</h2>
            <p className="fs-5 text-light">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

        </div></div>

        <div id="div2ii" className="d-flex"><img src="./images/Tile 2ii.png" height="350px" className="z-2 position-absolute" />
            <div className="z-1 position-absolute">
                <video src="./images/Tile 1ii Video.m4v" autoplay="" loop="" muted="" width="400px" height="300px"></video>
            </div>
           
        </div>
    </div>

<div id="div3" className="container_fluid d-flex">
    <div id="div3i" className="d-flex">
        <img src="./images/Tile 3ia.jpg" className="ml-75px;" />
        <div id="div3ia" className="container_fluid d-flex border border-3 border-secondary">
            <img src="./images/Sub-tile 3ia.png" height="94px" className="d-flex stranger" />
            <div id="div3iai" className="d-flex">
                <div className="fs-5 text-light">Stranger Things
                    <span style={{color: "blue;"}}>Downloading...</span></div>
            </div>
            <div id="div3iaii" className="d-flex"><img src="./Tile 3i GIF.gif" /></div>
        </div>
    </div>

    <div id="div3ii" className="d-flex">
        <div id="div3iib" className="text-light">
            <p className="create">Download your shows to watch offline</p>
            <p className="fs-4">Save your favorites easily and always have something to watch.</p>
        </div>
    </div>

</div>

<div id="div4" className="container_fluid d-flex">
    <div id="div4i" className="d-flex text-light">
        <div id="div4ia">
            <p className="create">Watch everywhere</p>
            <p className="fs-4">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
    </div>
    <div id="div4ii" className="d-flex"><img src="./images/Tile 4ii.png" height="350px" className="z-2 position-absolute" />
        <div className="z-1 position absolute p-4 ml-200px" >
            <video src="./images/Tile 4ii Video.m4v" width="290px" height="200" autoplay="" loop="" muted="" className="z-1 position-absolute"></video>
        </div>

    </div>
</div>


<div id="div5" className="container_fluid d-flex">
    <div id="div5i" className="d-flex">
        <div><img src="./images/Tile 5i.png" height="400px" /></div>
    </div>

    <div id="div5ii" className="d-flex text-light">
        <div id="div5iib">
            <p className="create">Create profiles for kids</p> 
            <p className="fs-4">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
    </div>
</div>

<div id="div6">
    <div className="row">{/*<!--0-->*/}
        <div className="col-2  border-opacity-0 mt-5" style = {{height : "50px;"}}></div>

        <div className="col-8  border-opacity-0 mt-5 text-center text-light freq" >
            <p className="create">Frequently Asked Questions</p>
        </div>

        <div className="col-2  border-opacity-0 mt-5" style = {{height : "50px;"}}></div>
    </div>

    

        <div className="accordion" id="accordionExample" data-bs-theme="dark">
            <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    What is Netflix?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body fs-4">
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                  </div>
                </div>
              </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How much does Netflix cost?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body fs-4">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Ksh 200 to Ksh 1,100 a month. No extra costs, no contracts.                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Where can I watch?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body fs-4">
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.                </div>
              </div>
            </div>
                    
            <div className="accordion-item mb-4">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    How do I cancel?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body fs-4">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
                </div>
              </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  What can I watch on Netflix?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body fs-4">
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Is Netflix good for kids?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body fs-4">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                    </div>
              </div>
            </div>

          </div>


          
          <div className="row">
                    <div className="col-2  border-opacity-0 mt-5" style={{height: "80px;"}}></div>
            
                    <div className="col-8  border-opacity-0 mt-5 text-center text-light row3" >
                        <p className="fs-5 text-center">Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
            
                    <div className="col-2  border-opacity-0 mt-5" style={{height: "80px;"}}></div>
                </div>
            
            
                <div className="row">
                    <div className="col-3  border-opacity-0 mt-3" style={{height: "80px;"}}></div>
            
                    <div className="col-4  border-opacity-0 mt-3 text-center text-light row3" >
                        <input type="email" placeholder="Email address" className="bg-secondary border border-secondary emaili" />
            
                    </div>
            
                    <div className="col-2  border-opacity-0 mt-3 text-center text-light gtstartedi">
                        <button type="button" className="btn btn-danger fs-4 gtstarted">Get Started {'>'}</button>
                    </div>
            
                    <div className="col-3  border-opacity-0 mt-3" style={{height: "80px;"}}></div>
                </div>
            
            </div>
    


   {/*<!--Footer Part-->*/}

<div id="div7" className="container_fluid d-flex justify-content-evenly pt-5">

    <div id="div7i" className="d-flex flex-column me-3" >
        <a href="#Questions" className="link-light link-underline-light">Questions? Contact us.</a><br />
        <a href="#Questions" className="link-light link-underline-light">FAQ</a><br />
        <a href="#Questions" className="link-light link-underline-light">Privacy</a><br />
        <a href="#Questions" className="link-light link-underline-light">Speed Test</a><br />

        <div className="dropdown">
            <button className="btn btn-dark dropdown-toggle mb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: "150px;"}}>
                <span className="material-symbols-outlined">translate</span> English
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item active" href="#">English</a></li>
            </ul>
            </div>

        <a href="#Questions" className="link-light link-underline-light">Netflix Kenya</a><br />

    </div>

    <div id="div7ii" className="d-flex flex-column justify-content-center">
        <a href="#Questions" className="link-light link-underline-light">Help Center</a><br />
        <a href="#Questions" className="link-light link-underline-light">Jobs</a><br />
        <a href="#Questions" className="link-light link-underline-light">Cookie Preferences</a><br />
        <a href="#Questions" className="link-light link-underline-light">Legal Notices</a><br />
    </div>

    <div id="div7iii" className="d-flex flex-column justify-content-center">
        <a href="#Questions" className="link-light link-underline-light">Account</a><br />
        <a href="#Questions" className="link-light link-underline-light">Ways to Watch</a><br />
        <a href="#Questions" className="link-light link-underline-light">Corporate Information</a><br />
        <a href="#Questions" className="link-light link-underline-light">Only on Netflix</a><br />
    </div>

    <div id="div7iv" className="d-flex flex-column justify-content-center">
        <a href="#Questions" className="link-light link-underline-light">Media Center</a><br />
        <a href="#Questions" className="link-light link-underline-light">Terms of Use</a><br />
        <a href="#Questions" className="link-light link-underline-light">Contact Us</a><br/>
    </div>

</div>

</div>

            </div>
        )
    }
}

export default navHook(Netflix);