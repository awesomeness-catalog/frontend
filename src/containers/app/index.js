import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
  </main>
)

export default App
