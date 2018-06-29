import React, { Component } from 'react';
import Nav from './components/Nav'
import ResultPanel from './components/ResultsPanel.js';
import SearchForm from './components/SearchForm';
import SavedPanel from './components/SavedPanel';
import Card from './components/resultCard'
import API from './utils/API'

class App extends Component {

  state = {
    searchArticles: [],
    savedArticles: [],
  }

  componentDidMount() {
    // this.loadSaved();
  }

  loadArticles = (event) => {
    event.preventDefault();
    
    API.getSearch().then(this.setState({searchArticles: res.data}))
  }

  // loadSaved = (res) => {
  //   API.getSaved.then(this.setState({savedArticles: res.data}))
  // }
  
  render() {
    return (
      <div>
      <Nav />
      <SearchForm 
      load={this.loadArticles}/>
      <ResultPanel>
        {this.state.searchArticles.map(article => (
          <Card 
            title={article.title} 
            
            />
        ))}
      </ResultPanel>
      <SavedPanel />
      </div>
    )
  }
}

export default App;
