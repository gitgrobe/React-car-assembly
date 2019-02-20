import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar.js'
import CarDisplay from './display'
import PropTypes from 'prop-types'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wheels: [1, 2],
      skeletons: [1, 2],
      car: {
        displayWheels: PropTypes.number,
        displaySkeleton: PropTypes.number
      }
    }
    this.choose = this.choose.bind(this)
    this.chooseSkel = this.chooseSkel.bind(this)

  }

  choose(id) {
    this.setState(prevState => ({
      displayWheels: prevState.displayWheels = id
    }))
  }

  chooseSkel(id) {
    this.setState(prevState => ({
      displaySkeleton: prevState.displaySkeleton = id
    }))
  }

  render() {
    const { chooseSkel, choose } = this
    const { wheels, skeletons } = this.state
    const { displaySkeleton, displayWheels } = this.state
    return (
      <section>
        <h1 className="brandTitle">TESLA MODEL X</h1>
        <Sidebar onChoose={choose} onChooseSkel={chooseSkel} wheels={wheels} skeletons={skeletons} />
        <CarDisplay displaySkeleton={displaySkeleton} displayWheels={displayWheels} />
      </section>
    )
  }
}

export default App;
