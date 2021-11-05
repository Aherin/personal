import React from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from '../components/navbar/NavBar'
import profile from '../assets/profile/profile-min.png';
import curriculum from '../assets/curriculum/CristianGiraldo2021CV-V2.pdf';
import './LandingPage.css'

export const LandingPage = () => {
    return (
        <>
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <NavBar />
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-one-quarter px-6 pb-6">
                                <figure className="image " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                                    <img className="rounded-corners" src={profile} alt="" />
                                </figure>
                            </div>
                            <div className="column px-6 has-text-centered-mobile has-text-left-desktop-only">
                                <p className="title is-size-1 mb-6" data-aos="fade-right" data-aos-duration="1000">
                                    Hi There!
                                </p>
                                <p className="subtitle is-size-3" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                                    Fuelled by a passion for designing compelling products, I have a deep desire to excel and
                                    continuously improve in my work. Learn more about my journey below
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-two-thirds px-6 pb-6 has-text-centered-mobile has-text-left-desktop-only">
                            <p className="title is-size-1 mb-6 " data-aos="fade-right" data-aos-duration="1000">
                                My Career So Far
                            </p>
                            <p className="subtitle is-size-3" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                                Skilled Software Developer with a Bachelor of Science degree in Electronic
                                Engineering and more than 5 years of programming experience. Qualified to
                                work with Java Application and a history of working in the information
                                technology and services industry. Experienced in Frontend development with
                                Angular and React.
                            </p>
                        </div>
                        <div className="column px-6 ">
                            <div className="tags are-large is-flex is-justify-content-center" >
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">SPRING BOOT</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">ELASTICSEARCH</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">MICROPROFILE</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">DATABASES</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">JAVASCRIPT</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">QUARKUS</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">ANGULAR</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">NODEJS</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">REACT</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">DOCKER</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">JUNIT</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">JAVA</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">JEST</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">CSS</span>
                                <span className="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">HTML</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="content has-text-centered">
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <a href="/personal">
                                <p className="subtitle">About</p>
                            </a>
                        </div>
                        <div className="level-item has-text-centered">
                            <a href="https://www.linkedin.com/in/giraldo-cristian/" target="_blank" rel="noreferrer">
                                <p className="subtitle">LinkedIn</p>
                            </a>
                        </div>
                        <div className="level-item has-text-centered">
                            <Link to={ curriculum } target="_blank">
                                <p className="subtitle">Curriculum</p>
                            </Link>
                        </div>
                    </nav>
                    <hr />
                    <p className="pt-6">
                        Copyright © 2021 Cristian Giraldo. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}
