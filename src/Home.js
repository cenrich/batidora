import React, { Component, Fragment } from 'react'
import { Input } from '@material-ui/core'

class Home extends Component  {
  state = {
		searchInput: '',
		searchResults: [],
	}

  handleSearchInput = (e) => {
		let query = e.target.value
		this.setState({ searchInput: query })
		if (this.state.searchInput.length >= 3) {
			fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
			)
				.then((res) => res.json())
        .then((res) => {
          console.log(res.drinks)
          this.setState({ searchResults: res.drinks })
        })
		}
	}
  
  render() {
    console.log(this.state.searchResults)
    return (
      <Fragment>
        <input  placeholder='buscá tu cóctel favorito' 
                value={this.state.searchInput}
                onChange={this.handleSearchInput}
        />
        <ul>
          {this.state.searchResults &&
				    this.state.searchResults.map((e) => (
					    <li key={e.idDrink}>
						    {/* <a onClick={() => expandMovie(e.id)}>{e.title}</a> */}
                {e.strDrink}
					    </li>
				))}
        </ul>

      </Fragment>
  )}
}

export default Home;