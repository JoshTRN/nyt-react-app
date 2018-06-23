import React, { Component } from 'react';
import Nav from './components/Nav'
import ResultPanel from './components/ResultsPanel.js';
import SearchForm from './components/SearchForm';
import SavedPanel from './components/SavedPanel';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <SearchForm />
      <ResultPanel />
      <SavedPanel />
      </div>
    )
  }
}

export default App;
