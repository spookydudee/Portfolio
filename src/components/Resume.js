import React, { Fragment } from 'react'
import { SiCodechef, SiCodeforces } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">PRATYUSH SAHOO</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">

                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">B.Tech - Electroniocs and Communication Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2021 - 2025</h6>
                                <p className="m-0">NIT Rourkela</p>
                                <p>CGPA: 8.37</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2007-2021</h6>
                                <p className="m-0">Vyomayana Samastha Vidyalaya</p>
                                <p>Grade: 92%</p>
                            </li>
                            
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.codechef.com/users/spookydude" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="https://codeforces.com/profile/Pratyush1427" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodeforces className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume