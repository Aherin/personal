import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import curriculum from '../../assets/curriculum/CristianGiraldo2021CV-V2.pdf';

export const NavBar = () => {

    const [isActive, setisActive] = useState(false);

    return (
        <>
            <section className="navbar section animate__animated animate__fadeInDown animate__slow" role="navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/personal">
                            <img src={logo} alt="" />
                        </Link>
                        <div className="navbar-item">
                            <p className="subtitle"><strong></strong></p>
                        </div>
                        <button className={`navbar-burger ${ isActive ? "is-active" : "" }` } data-target="navbarBasicExample" onClick={ () => setisActive(!isActive) }>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div id="navbarBasicExample" className={ `navbar-menu animate__animated animate__fadeIn ${ isActive ? "is-active" : "" }` }>
                        <div className="navbar-end">
                            <a className="navbar-item" href="/personal">
                                <strong>About</strong>
                            </a>
                            <a className="navbar-item" href="https://www.linkedin.com/in/giraldo-cristian/" target="_blank" rel="noreferrer">
                                <strong>LinkedIn</strong>
                            </a>
                            <Link className="navbar-item" to={ curriculum } target="_blank">
                                <div className="button is-dark"><strong>Curriculum</strong></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
