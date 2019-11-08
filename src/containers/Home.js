import React, { Component } from 'react'
import Input from '../components/Input'
import List from '../components/List'

class Home extends Component  {
  state = {
		searchInput: '',
		searchResults: [],
	}

  handleSearchInput = (e) => {
		let query = e.target.value
		this.setState({ searchInput: query })
		if (this.state.searchInput.length >= 3) {
			fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
				.then((res) => res.json())
        .then((res) => this.setState({ searchResults: res.drinks }))
      }
    }
   
  render() {
    return (
        <div className='container'>
          <Input value={this.state.searchInput} onInputChange={this.handleSearchInput} />       
          <List results={this.state.searchResults} />
        </div>
  )}
}

export default Home;