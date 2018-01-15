import React from 'react';
import { Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import Search from './search'

const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/search/tags/:tags" component={Search} />
    <Route exact path="/about-us" component={About} />
  </main>
)

export default App
