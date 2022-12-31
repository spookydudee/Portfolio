import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>2nd-year Undergrad at the National Institute of Technology Rourkela<br></br>
                               pursuing Electronics and Communication Engineering.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently inclined toward programming and Development<br></br>
                               Pretty much into Anime, Photography, and Cinematography.
                            </p>
                            <p className='slide-in-bottom'>
                                The technology I've worked on: Html, CSS, Js, Bootstrap,<br></br>
                                 nodejs, express, react</span>
                            </p>
                            <p className='slide-in-bottom'>
                              Currently, Learning React Js Library.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-10 col-sm-10">
                        <img className="img-fluid" src="../images/luffy2.png" alt="..."></img>
                    </div>
                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About
