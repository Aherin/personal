import React from 'react'
import { LandingPage } from '../pages/LandingPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={ LandingPage } />
                </Switch>
            </div>
        </Router>
    )
}
