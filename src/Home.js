import React, { Component, Fragment } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

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
        .then((res) => this.setState({ searchResults: res.drinks }))
      }
    }
   
  render() {
    return (
      <Fragment>
        <input  placeholder='buscá tu cóctel favorito' 
                value={this.state.searchInput}
                onChange={this.handleSearchInput}
                className='input-wf2'
        />
        <div className='grid'>
          {this.state.searchResults &&
				    this.state.searchResults.map((e) => (
              <Card>
                <CardActionArea className='item'>
                  <CardMedia
                    image={e.strDrinkThumb}
                    className='item-image'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {e.strDrink}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      {e.strInstructions}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
				))}
        </div>
      </Fragment>
  )}
}

export default Home;