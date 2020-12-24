

import React from 'react';
import '../../components/SearchBar/search.css'
import axios from 'axios';
import Loader from '../../images/loader.gif';
class SearchBar extends React.Component{
    constructor(props){
        super(props);
    
    this.state = {
        query: '',
        results: {},
        loading:false,
        message:''
    };
    this.cancel = '';
}
fetchSearchResults = (updatedPageNo,query) => {
  const pageNumber = updatedPageNo ? `&page=4${updatedPageNo}` : '';
  const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}`

  if(this.cancel){
    this.cancel.cancel();
  }
  this.cancel = axios.CancelToken.source();
  axios.get (searchUrl,{
    cancelToken : this.cancel.token
  }).then(res => {
    const resultNotFoundMessage = ! res.data.hits.length 
    ? 'There are no more search result. Please try a new search'
    :'';
    this.setState({
      results:res.data.hits,
      messages: resultNotFoundMessage,
      loading:false


    })
    
  } )
  .catch(error =>{
    if (axios.isCancel(error) || error) {
      this.setState({
        loading:false,
        message:'Failed to fetch the data, Please Check the network'
      })
    }
  })
};

handleOnInputChange = ( event ) => {
  const query = event.target.value;
  if ( ! query ) {
    this.setState( { query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
  } else {
    this.setState( { query, loading: true, message: '' }, () => {
      this.fetchSearchResults( 1, query );
    } );
  }
};
renderSearchResults = () => {
  const { results } = this.state;

  if ( Object.keys( results ).length && results.length ) {
    return (
      <div className="results-container">
        { results.map( result => {
          return (
            <a key={ result.id } href={ result.previewURL } className="result-item">
              <h6 className="image-username">{result.user}</h6>
              <div className="image-wrapper">
                <img className="image" src={ result.previewURL } alt={`${result.username} image`}/>
              </div>
            </a>
          )
        } ) }

      </div>
    )
  }
};


render(){
    const {query,loading,message} = this.state;
    // const query = this.state.query;
    console.log(this.state)
    return (
        <div className = "container">
        {/* Heading */}
        <h2 className="heading"> Live Search : React App</h2>
        {/* Search Input */}
        <label className="search-label" htmlFor = "search-input">
            <input
            type = "text"
            value = {query}
            id = "search-input"
            name = "query"
            placeholder ="Search..."
            onChange= {this.handleOnInputChange}
            />
            <i class="fa fa-search" aria-hidden="true"></i>

        </label> 
        {/* Error Message */}
        {message && <p className="message">{message}</p>}


        {/* loader */}
        <img src = {Loader} className ={`search-loading ${loading ? 'show' : 'hide'}`} alt = "loader"/>
        {/* Result    */}
        {this.renderSearchResults()}
        </div>
    )}}
    export default SearchBar;