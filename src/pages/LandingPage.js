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
                <div className="hero-body animate__animated animate__fadeIn animate__slow">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-one-quarter px-6 pb-6">
                                <figure className="image ">
                                    <img className="rounded-corners" src={profile} alt="" />
                                </figure>
                            </div>
                            <div className="column px-6 has-text-left-desktop-only has-text-centered-mobile">
                                <p className="title is-size-1 mb-6">
                                    Hi There!
                                </p>
                                <p className="subtitle is-size-3">
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
                            <p class="subtitle is-size-3" data-aos="fade-right" data-aos-duration="1000">
                                Always up for a challenge, I have worked for lean start-ups and was a member of the first
                                New Zealand start-up to attend Y Combinator, the largest start-up accelerator in the
                                world. From there, I worked my way up to Art Director and Team Lead at Appster where I
                                oversaw the design of 30+ mobile and desktop apps. Currently, I lead UI/UX design at SaaS
                                start-up VideoMyJob.
                            </p>
                        </div>
                        <div class="column px-6">
                            <div class="tags are-large" >
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">UI DESIGN</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">UX DESIGN</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">PROTOTYPING</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">BRANDING</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">HTML/CSS</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">WIREFRAMING</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">INFORMATION ARCHITECTURE</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">USER RESEARCH</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">USER INTERVIEWS</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">LEADERSHIP</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">SKETCH</span>
                                <span class="tag is-rounded is-dark" data-aos="flip-right" data-aos-duration="1000">ADOBE SUITE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
