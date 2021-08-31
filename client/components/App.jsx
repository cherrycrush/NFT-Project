import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Faq from './Faq'
import Footer from './Footer'
import Header from './Header'
import Intro from './Intro'
import MintCountdown from './MintCountdown'
import Nav from './Nav'
import Projects from './Projects'

const App = () => {
  return (
    <Router>
      <Route path='/'>
        <MintCountdown />
        <Nav />
        <Header />
        <Intro />
        <Projects />
        <Faq />
        <Footer />
      </Route>
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  )
}

export default App
