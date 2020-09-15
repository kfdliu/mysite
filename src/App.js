import React from 'react'
import 'animate.css'

import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ReturnTopButton from './components/ReturnTopButton'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
import './css/nav-bar.css'
import './css/index.css'
import './css/projects.css'
import './css/contact.css'
import './css/resume.css'
import './css/footer.css'

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
    } else if (pageID === 3){
      e.preventDefault()
      this.setState ({page: "contact"})
    } else {
      e.preventDefault()
      this.setState ({page: "resume"})
    }
  }

  render () {
    return (
      <div>
        <NavBar handleNavClick={this.handleNavClick} />
        <MainContent page={this.state.page} />
        <Footer page={this.state.page}/>
        <ReturnTopButton />
      </div>
    )
  }
}

export default App