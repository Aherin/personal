import React from 'react'
import { NavBar } from '../components/navbar/NavBar'
import profile from '../assets/profile/profile-min.png';
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
                                    <img className="rounded-corners" src={ profile } alt="" />
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

            <section className="section">
                <div className="container">
                    <div class="columns">
                        <div class="column is-two-thirds px-6 pb-6 has-text-centered-mobile has-text-left-desktop-only">
                            <p class="title is-size-1 mb-6 " data-aos="fade-right" data-aos-duration="1000">
                                My Career So Far
                            </p>
                            <p class="subtitle is-size-3" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                                Skilled Software Developer with a Bachelor of Science degree in Electronic
                                Engineering and more than 5 years of programming experience. Qualified to
                                work with Java Application and a history of working in the information
                                technology and services industry. Experienced in Frontend development with
                                Angular and React.
                            </p>
                        </div>
                        <div class="column px-6 ">
                            <div class="tags are-large is-flex is-justify-content-center" >
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">SPRING BOOT</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">ELASTICSEARCH</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">MICROPROFILE</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">DATABASES</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">JAVASCRIPT</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">QUARKUS</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">ANGULAR</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">NODEJS</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">REACT</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">DOCKER</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">JUNIT</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">JAVA</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">JEST</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">CSS</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">HTML</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
