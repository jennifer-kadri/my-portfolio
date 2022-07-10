import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Pages/'

const App = () => {
  return (
      <Router>
        <Home />
      </Router>
  )
}

export default App