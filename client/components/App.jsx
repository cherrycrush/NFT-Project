import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <Route path='/'>
        <Nav />
      </Route>
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  )
}

export default App
