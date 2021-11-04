import React, { useState } from 'react'

export const NavBar = () => {

    const [isActive, setisActive] = useState(false);

    return (
        <>
            <section className="navbar section animate__animated animate__fadeInDown animate__slow" role="navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
                    </a>
                    <div className="navbar-item">
                        <p className="subtitle"><strong>Cristian Giraldo</strong></p>
                    </div>
                    <button className={`navbar-burger ${isActive ? "is-active" : ""}`} data-target="navbarBasicExample" onClick={() => setisActive(!isActive)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu animate__animated animate__fadeIn ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-end">
                        <a className="navbar-item" href="/">
                            <strong>About</strong>
                        </a>
                        <a className="navbar-item" href="/">
                            <strong>Contact</strong>
                        </a>
                        <a className="navbar-item" href="/">
                            <div className="button is-dark"><strong>View Work</strong></div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
