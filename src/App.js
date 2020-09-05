import React from 'react'
import 'animate.css'

import NavBar from './components/NavBar'
import MainContent from './components/MainContent'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
import './css/nav-bar.css'
import './css/main-content.css'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      page: "index"
    }
  }

  handleNavClick = (e, pageID) => {
    if (pageID === 1) {
      e.preventDefault()
      this.setState ({page: "index"})
    } else if (pageID === 2) {
      e.preventDefault()
      this.setState ({page: "projects"})
    } else {
      e.preventDefault()
      this.setState ({page: "contact"})
    }
  }

  render () {
    return (
      <div>
        <NavBar handleNavClick={this.handleNavClick}/>
        <MainContent page={this.state.page}/>
      </div>
    )
  }
}

export default App