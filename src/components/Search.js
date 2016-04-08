var React = require('react');
var ReactDOM = require('react-dom');
var PokemonStats = require('./PokemonStats');
var $ = require('jquery');


var Search = React.createClass({

  getInitialState:function(){
    return{
      searchValue: null,
      searchType: 'name',
      data:null
    }
  },

  search:function(){
    if(this.state.searchType==='name'){
      var query = 'http://pokeapi.co/api/v2/pokemon/'+this.state.searchValue+'/'
    }
    if(this.state.searchType==='type'){
      var query = 'http://pokeapi.co/api/v2/type/'+this.state.searchValue+'/'
    }
    if(this.state.searchType==='attack'){
      var query = 'http://pokeapi.co/api/v2/move/'+this.state.searchValue+'/'
    }

    $.get(query,function(response){
      var data = {data:response};
      this.setState(data);
    }.bind(this))

  },

  storeInput:function(userInput){
    var data = {
      searchValue: userInput.target.form[0].value
    }

    this.setState({searchValue: userInput.target.form[0].value}); 

  },

  queryType:function(x){
    if(x.target.value === 'name'){
      this.setState({searchType:'name'})
    }
    if(x.target.value === 'type'){
      this.setState({searchType:'type'})
    }
    if(x.target.value === 'attack'){
      this.setState({searchType:'attack'})
    }


  },

  render:function(){
    return(
      
      <div className='container-fluid text-center Portfolio' >
        <a name='portfolioDom'></a>
         <h2 className='text-center col-xs-12'>Search</h2>

            <div id='searchbuttons'>
              <button onClick={this.queryType} name='searchChoice' type='button' value='name'> Name </button>
              <button onClick={this.queryType} name='searchChoice' type='button' value='type'> Type </button>
              <button onClick={this.queryType} name='searchChoice' type='button' value='attack'> Attack </button>
            </div>

            <form >
              <div className='center-block'>
                <input onChange={this.storeInput} id='searchbox' name='query' type='textbox' />

                <button id='searchbutton' type="button" onClick={this.search} className="center-block">Search</button>
              </div>
            </form>

          
          <br/>
        
         
         

      </div>

    )
  }

});


module.exports = Search;