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
            <Switch>
                <Route path="/" component={LandingPage} />
            </Switch>
        </Router>
    )
}
