import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';




export default class SearchableMovieReviewsContainer extends React.Component {

  state ={
    reviews: [],
    searchTerm: ''
  }

  componentWillMount = () => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(res => res.json())
    .then(json => this.setState({reviews: json.results}))
  }

  render() {
    return(
        <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews}/>
        </div>
    );
  }
}
