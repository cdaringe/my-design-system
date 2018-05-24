import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import myDesignDataModel from './data-model.json'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <pre>{JSON.stringify(myDesignDataModel, null, 2)}</pre>
        <h1>Screens</h1>
        <p>
          <pre>{JSON.stringify(myDesignDataModel.screens)}</pre>
        </p>
      </div>
    )
  }
}

export default App
