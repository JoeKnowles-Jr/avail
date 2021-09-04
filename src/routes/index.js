import React from 'react'
import { Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import App from '../components/app/app'
import Auth from '../pages/Auth'
import Signin from '../components/auth/signin'
import Signup from '../components/auth/signup'
import Signout from '../components/auth/signout'
import Home from '../pages/Home'
import Sandbox from '../pages/Sandbox'
import Profile from '../pages/Profile'

const Routes = () => {
    return (
        <App>       
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/sandbox" component={Sandbox} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signout" component={Signout} />
            <Route exact path="/signup" component={Signup} />      
        </App>
    )
}

export default Routes
