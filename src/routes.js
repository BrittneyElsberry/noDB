import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Goals from './components/Goals'
import Accomplishments from './components/Accomplishments'
import Auth from './components/Auth/Auth'
import JobListing from './components/JobListing'

export default (

<Switch>
    <Route path='/joblisting' component={JobListing}/>
    {/* <Route path='/careeraccomplishments' component={Accomplishments}/>
    <Route path='goals' component={Goals} /> */}
    <Route path = '/auth/register' component={Auth}/>
</Switch>

)