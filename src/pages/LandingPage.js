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
                            <div className="column px-6">
                                <p className="title is-size-1 has-text-left-desktop-only has-text-centered-mobile mb-6">
                                    Hi there!
                                </p>
                                <p className="subtitle is-size-3 has-text-left-desktop-only has-text-centered-mobile">
                                    Fuelled by a passion for designing compelling products, I have a deep desire to excel and
                                    continuously improve in my work. Learn more about my journey below
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
