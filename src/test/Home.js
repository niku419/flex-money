import React from 'react'
import Main from './Main'
import Signin from './Signin'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


export default function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path='/:email' component={Main}/>
        <Route exact path='/' component={Signin} />
      </Switch>
    </Router>
  )
}
