import React from 'react'

export const NavBar = () => {
    return (
        <>
            <section className="section">
                <nav className="navbar" role="navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""/>
                        </a>
                        <div className="navbar-item">
                            <p className="subtitle"><strong>Cristian Giraldo</strong></p>
                        </div>
                        <button className="navbar-burger" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu is-active">
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
                </nav>
            </section>
        </>
    )
}
