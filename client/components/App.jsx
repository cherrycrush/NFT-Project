import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Intro from './Intro'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <Route path='/'>
        <Nav />
        <Header />
        <Intro />
      </Route>
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  )
}

export default App
